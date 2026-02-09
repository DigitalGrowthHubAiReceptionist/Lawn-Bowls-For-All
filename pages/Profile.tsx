import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { Calendar, Package, Settings, Award, LogOut, Camera, ChevronRight, X, MapPin, CreditCard, Truck, CheckCircle, Clock, Trophy, Users, Star } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  const [trackingOrder, setTrackingOrder] = useState<any | null>(null);

  // Mock achievements data
  const achievements = [
    { id: '1', label: 'Early Bird', icon: Award, color: 'text-lb-gold', bg: 'bg-lb-gold/10', unlocked: true, date: 'May 2023' },
    { id: '2', label: 'Champion', icon: Trophy, color: 'text-lb-blue', bg: 'bg-lb-blue/10', unlocked: false, date: '-' },
    { id: '3', label: 'Socialite', icon: Users, color: 'text-lb-orange', bg: 'bg-lb-orange/10', unlocked: true, date: 'Aug 2023' },
    { id: '4', label: 'Supporter', icon: Package, color: 'text-green-600', bg: 'bg-green-100', unlocked: true, date: 'Oct 2023' },
    { id: '5', label: '5-Star', icon: Star, color: 'text-purple-600', bg: 'bg-purple-100', unlocked: false, date: '-' },
    { id: '6', label: 'Club Legend', icon: Award, color: 'text-red-600', bg: 'bg-red-100', unlocked: false, date: '-' },
  ];

  // Mock order data
  const orders = [
    { 
      id: 'ORD-7782-XJ', 
      date: 'Oct 24, 2023', 
      amount: 465.99, 
      status: 'Delivered', 
      itemsSummary: 'Ace Pro Vector Bowls',
      items: [
        { name: 'Ace Pro Vector Bowls (Set of 4)', price: 450.00, quantity: 1 },
        { name: 'Classic Club Polisher', price: 15.99, quantity: 1 }
      ],
      shippingAddress: '123 Green Rink Ave, Sportsville',
      paymentMethod: 'Credit Card (**** 4242)'
    },
    { 
      id: 'ORD-5592-KP',
      date: 'Oct 26, 2023',
      amount: 89.95,
      status: 'Shipped',
      itemsSummary: 'Pro-Grip Lawn Shoes',
      items: [
        { name: 'Pro-Grip Lawn Shoes', price: 89.95, quantity: 1 }
      ],
      shippingAddress: '123 Green Rink Ave, Sportsville',
      paymentMethod: 'Credit Card (**** 1234)',
      tracking: {
         number: 'TRK-1122-SS',
         carrier: 'SpeedyCourier',
         estimatedDelivery: 'Oct 29, 2023',
         status: 'In Transit',
         history: [
            { date: 'Oct 27, 09:00 AM', status: 'Departed Facility', location: 'Cape Town' },
            { date: 'Oct 26, 02:00 PM', status: 'Picked Up', location: 'Warehouse' },
            { date: 'Oct 26, 10:00 AM', status: 'Label Created', location: 'System' }
         ]
      }
    },
    { 
      id: 'ORD-9921-MC', 
      date: 'Sep 12, 2023', 
      amount: 125.50, 
      status: 'Delivered', 
      itemsSummary: 'Deluxe Trolley Bag',
      items: [
        { name: 'Deluxe Trolley Bag', price: 120.00, quantity: 1 },
        { name: 'Scorecard Holder', price: 5.50, quantity: 1 }
      ],
      shippingAddress: '123 Green Rink Ave, Sportsville',
      paymentMethod: 'PayPal'
    },
    { 
      id: 'ORD-3321-AB', 
      date: 'Aug 05, 2023', 
      amount: 45.00, 
      status: 'Processing', 
      itemsSummary: 'Breathable Team Jersey',
      items: [
        { name: 'Breathable Team Jersey', price: 45.00, quantity: 1 }
      ],
      shippingAddress: '123 Green Rink Ave, Sportsville',
      paymentMethod: 'Credit Card (**** 8888)',
      tracking: {
         number: 'PENDING',
         carrier: 'FastShip',
         estimatedDelivery: 'TBD',
         status: 'Processing',
         history: [
             { date: 'Aug 05, 09:30 AM', status: 'Order Received', location: 'System' }
         ]
      }
    }
  ];

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        updateUser({ avatar: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (!user) return null;

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen animate-fade-in relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100">
          <div className="bg-lb-blue h-32 relative"></div>
          <div className="px-8 pb-8 flex flex-col md:flex-row items-center md:items-end -mt-12 md:-mt-16">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-white z-10 relative group">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              <div 
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={triggerFileInput}
                title="Change Profile Picture"
              >
                <Camera className="text-white" size={24} />
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-lb-dark">{user.name}</h1>
              <div className="text-gray-500 flex flex-col md:flex-row items-center md:space-x-4">
                 <span>{user.email}</span>
                 <span className="hidden md:block">•</span>
                 <span>Joined {user.joinDate}</span>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex space-x-3">
              <Button variant="outline" size="sm" onClick={() => logout()}>
                <LogOut size={16} className="mr-2" /> Logout
              </Button>
              <Button variant="primary" size="sm">
                <Settings size={16} className="mr-2" /> Update Profile
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar / Stats */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
               <h3 className="font-bold text-lg text-lb-dark mb-4 border-b pb-2">Membership Details</h3>
               <div className="space-y-3">
                 <div className="flex justify-between">
                   <span className="text-gray-500">Status</span>
                   <span className="font-semibold text-green-600">Active</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-500">Type</span>
                   <span className="font-semibold text-lb-blue">{user.role}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-500">Club ID</span>
                   <span className="font-semibold text-gray-800">#82910</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-500">Renewal Date</span>
                   <span className="font-semibold text-gray-800">Dec 31, 2024</span>
                 </div>
               </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
               <div className="flex items-center justify-between mb-4 border-b pb-2">
                 <h3 className="font-bold text-lg text-lb-dark">Achievements</h3>
                 <span className="text-xs text-gray-500 font-medium">3 / 6 Unlocked</span>
               </div>
               
               <div className="grid grid-cols-3 gap-3 text-center">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className={`flex flex-col items-center p-2 rounded-lg transition-colors ${achievement.unlocked ? 'hover:bg-gray-50' : 'opacity-40 grayscale'}`}
                      title={achievement.unlocked ? `Unlocked on ${achievement.date}` : 'Locked'}
                    >
                      <div className={`${achievement.bg} p-2.5 rounded-full mb-2`}>
                        <achievement.icon size={20} className={achievement.color} />
                      </div>
                      <span className="text-xs font-semibold text-gray-700 leading-tight">{achievement.label}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Recent Orders */}
            <div>
              <div className="flex items-center justify-between mb-4">
                 <h2 className="text-xl font-bold text-lb-dark flex items-center">
                   <Package size={20} className="mr-2 text-lb-blue" /> Recent Orders
                 </h2>
                 {orders.length > 0 && <a href="#" className="text-sm text-lb-blue hover:underline">View All</a>}
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                 {orders.length > 0 ? (
                   <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse">
                       <thead>
                         <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                           <th className="px-6 py-4">Order ID</th>
                           <th className="px-6 py-4">Date</th>
                           <th className="px-6 py-4">Status</th>
                           <th className="px-6 py-4">Total</th>
                           <th className="px-6 py-4 text-right">Action</th>
                         </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-100">
                         {orders.map((order) => (
                           <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                             <td className="px-6 py-4">
                               <span className="font-medium text-lb-blue">{order.id}</span>
                               <div className="text-xs text-gray-400 mt-0.5 md:hidden">{order.itemsSummary}</div>
                             </td>
                             <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                             <td className="px-6 py-4">
                               <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                 order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                                 order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                                 order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                                 'bg-gray-100 text-gray-800'
                               }`}>
                                 {order.status}
                               </span>
                             </td>
                             <td className="px-6 py-4 font-bold text-gray-800 text-sm">R{order.amount.toFixed(2)}</td>
                             <td className="px-6 py-4 text-right whitespace-nowrap">
                               {(order.status === 'Processing' || order.status === 'Shipped') && (
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="mr-2 text-lb-blue bg-blue-50 hover:bg-blue-100 border border-blue-100"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setTrackingOrder(order);
                                    }}
                                  >
                                    <Truck size={14} className="mr-1.5" /> Track
                                  </Button>
                               )}
                               <button 
                                 className="text-gray-400 hover:text-lb-orange transition-colors p-2"
                                 onClick={() => setSelectedOrder(order)}
                                 title="View Details"
                               >
                                 <ChevronRight size={20} />
                               </button>
                             </td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 ) : (
                   <div className="p-8 text-center text-gray-500">
                      <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                         <Package size={24} className="text-gray-400" />
                      </div>
                      <p className="mb-4">You haven't placed any orders yet.</p>
                      <Button variant="primary" size="sm" onClick={() => navigate('/shop')}>
                         Browse Shop
                      </Button>
                   </div>
                 )}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-4">
                 <h2 className="text-xl font-bold text-lb-dark flex items-center">
                   <Calendar size={20} className="mr-2 text-lb-blue" /> My Events
                 </h2>
                 <a href="#" className="text-sm text-lb-blue hover:underline">View All</a>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                 {/* Empty State for Demo */}
                 <div className="p-8 text-center text-gray-500">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                       <Calendar size={24} className="text-gray-400" />
                    </div>
                    <p>You are not registered for any upcoming events.</p>
                    <Button variant="outline" size="sm" className="mt-4" onClick={() => navigate('/events')}>
                       Find Events
                    </Button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedOrder(null)}>
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden" 
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
                <div>
                   <h3 className="text-xl font-bold text-lb-dark">Order Details</h3>
                   <p className="text-sm text-gray-500">ID: {selectedOrder.id}</p>
                </div>
                <button onClick={() => setSelectedOrder(null)} className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                    <X size={24} />
                </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
                {/* Meta Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Date Placed</p>
                        <p className="font-semibold text-gray-800">{selectedOrder.date}</p>
                    </div>
                     <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Current Status</p>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                            selectedOrder.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                            selectedOrder.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                            selectedOrder.status === 'Shipped' ? 'bg-purple-100 text-purple-700' : 
                            'bg-gray-100 text-gray-700'
                        }`}>
                            {selectedOrder.status}
                        </span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Payment Method</p>
                        <p className="font-semibold text-gray-800 flex items-center">
                            <CreditCard size={14} className="mr-1.5 text-gray-400" />
                            {selectedOrder.paymentMethod.split(' ')[0]}
                        </p>
                    </div>
                </div>
                
                {/* Items Table */}
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 font-semibold text-gray-600">Item Description</th>
                                <th className="px-4 py-3 font-semibold text-gray-600 text-center">Qty</th>
                                <th className="px-4 py-3 font-semibold text-gray-600 text-right">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {selectedOrder.items.map((item: any, idx: number) => (
                                <tr key={idx}>
                                    <td className="px-4 py-3 text-gray-800 font-medium">{item.name}</td>
                                    <td className="px-4 py-3 text-center text-gray-600">{item.quantity}</td>
                                    <td className="px-4 py-3 text-right text-gray-800">R{item.price.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-gray-50">
                            <tr>
                                <td colSpan={2} className="px-4 py-3 text-right font-bold text-gray-700">Total</td>
                                <td className="px-4 py-3 text-right font-bold text-lb-blue text-lg">R{selectedOrder.amount.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Shipping Info */}
                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <MapPin className="text-lb-orange mt-0.5 mr-3 flex-shrink-0" size={20} />
                    <div>
                         <p className="text-sm font-bold text-gray-800 mb-1">Shipping Address</p>
                         <p className="text-sm text-gray-600">{selectedOrder.shippingAddress}</p>
                    </div>
                </div>
            </div>
             
             {/* Modal Footer */}
             <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-100">
                <Button variant="ghost" onClick={() => setSelectedOrder(null)}>Close</Button>
                <Button variant="outline" onClick={() => window.print()}>Print Invoice</Button>
            </div>
          </div>
        </div>
      )}

      {/* Tracking Modal */}
      {trackingOrder && trackingOrder.tracking && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setTrackingOrder(null)}>
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden" 
            onClick={e => e.stopPropagation()}
          >
             {/* Header */}
            <div className="bg-lb-blue p-6 text-white flex justify-between items-start">
               <div>
                  <h3 className="text-xl font-bold flex items-center"><Truck size={20} className="mr-2" /> Track Package</h3>
                  <p className="text-blue-200 text-sm mt-1">Order #{trackingOrder.id}</p>
               </div>
               <button onClick={() => setTrackingOrder(null)} className="text-blue-200 hover:text-white transition-colors">
                  <X size={24} />
               </button>
            </div>

            <div className="p-6">
                {/* Status Bar */}
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
                   <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Current Status</p>
                      <p className="text-lb-dark font-bold text-lg">{trackingOrder.tracking.status}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase font-semibold">Est. Delivery</p>
                      <p className="text-lb-orange font-bold text-lg">{trackingOrder.tracking.estimatedDelivery}</p>
                   </div>
                </div>
                
                <div className="mb-6 px-1">
                   <p className="text-sm text-gray-600 mb-1">Tracking Number: <span className="font-mono font-bold text-gray-800">{trackingOrder.tracking.number}</span></p>
                   <p className="text-sm text-gray-600">Carrier: <span className="font-medium text-gray-800">{trackingOrder.tracking.carrier}</span></p>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-gray-200 ml-3 space-y-8 my-4 pb-2">
                    {trackingOrder.tracking.history.map((event: any, index: number) => (
                       <div key={index} className="ml-6 relative">
                          <span className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 border-white ring-1 ring-gray-200 ${index === 0 ? 'bg-lb-blue ring-lb-blue/30' : 'bg-gray-300'}`}></span>
                          <div>
                             <p className={`font-bold text-sm ${index === 0 ? 'text-lb-blue' : 'text-gray-600'}`}>{event.status}</p>
                             <p className="text-xs text-gray-500 flex items-center mt-1">
                                <Clock size={12} className="mr-1" /> {event.date} 
                                <span className="mx-1.5">•</span> 
                                <MapPin size={12} className="mr-1" /> {event.location}
                             </p>
                          </div>
                       </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-100">
               <Button variant="primary" size="sm" onClick={() => setTrackingOrder(null)}>Done</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};