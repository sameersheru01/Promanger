import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { HiArrowSmDown } from 'react-icons/hi';

const CustomDateInput = () => {
  const [startDate, setStartDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Track if the date picker is open

  // Function to handle date change
  const handleDateChange = (date) => {
    setStartDate(date);
    setIsOpen(false); // Close the calendar after selecting a date
  };

  // Function to open the date picker
  const handleInputClick = () => {
    setIsOpen((prev) => !prev); // Toggle the date picker
  };

  return (
    <div>
      <label htmlFor="date-input">Select a date:</label>
      <div>
        <input
          type="text"
          id="date-input"
          value={startDate ? format(startDate, 'd/MM/yyyy') : ''}
          onClick={handleInputClick}
          placeholder="d/mm/yyyy"
          readOnly // Prevent keyboard input
        />
        {isOpen && (
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            onClickOutside={() => setIsOpen(false)} // Close the date picker when clicking outside
            dateFormat="d/MM/yyyy"
            renderCustomHeader={({ date, increaseMonth, decreaseMonth }) => (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={decreaseMonth} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <HiArrowSmDown style={{ transform: 'rotate(180deg)' }} /> {/* Previous Month */}
                </button>
                <span>{format(date, 'MMMM yyyy')}</span> {/* Display current month and year */}
                <button onClick={increaseMonth} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <HiArrowSmDown /> {/* Next Month */}
                </button>
              </div>
            )}
          />
        )}
      </div>
      <div>
        <p>Internal Format (for submission): {startDate ? format(startDate, 'yyyy-MM-dd') : ''}</p>
      </div>
    </div>
  );
};

export default CustomDateInput;
