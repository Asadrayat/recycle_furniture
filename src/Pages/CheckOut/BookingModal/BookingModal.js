import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';

const BookingModal = ({furnitureOption}) => {
    const {title} = furnitureOption;
    const {user} = useContext(AuthContext);
    return (
        <div>
            <>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Furniture</h3>
                        <form /* onSubmit={handleBooking} */ className='grid grid-cols-1 gap-3 mt-10'>
                            <input name="name" type="text" defaultValue={title}  disabled className="input w-full input-bordered" />
                            <input name="name" type="text"  disabled className="input w-full input-bordered" />
                        
                            <input name="displayName" type="text" defaultValue={user?.displayName} placeholder="Your name" className="input w-full input-bordered" />

                            <input name="email" type="email" disabled defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />
                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                            <input name="pickup" type="text" placeholder="Enter Pickup Point" className="input w-full input-bordered" />
                            <br />
                            <input className='btn btn-warning w-full' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </>
        </div>
    );
};

export default BookingModal;