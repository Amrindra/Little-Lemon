import "./Reservation.css";
import ReservationForm from "./ReservationForm";

function Reservation() {
  return (
    <div className="reservation-wrapper">
      <div className="reservation-container">
        <div className="reservation-text">
          <h2>Experience the perfect balance of tradition and luxury.</h2>
          <p>
            At Little Lemon, we take great pride in providing our customers with
            the greatest luxurious experience with a touch of <em>tradition</em>
            .
          </p>
          <p>Book a table with us to share in this experience.</p>
        </div>
        <div className="reservation-form">
          <h1>Reserve a Table</h1>
          <p>
            Please fill in and submit form to book your reservation at Little
            Lemon.
          </p>
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
