import React from 'react';

function BirthdayCard({ selectedMonth }) {

    // 🔥 DUMMY DATA
    const birthdays = [
        { name: "Rina Putri", dept: "Finance Dept", date: "1999-03-25" },
        { name: "Andi Setiawan", dept: "HR Dept", date: "1998-04-10" },
        { name: "Budi Santoso", dept: "IT Dept", date: "2000-03-05" },
        { name: "Siti Aminah", dept: "Marketing", date: "1997-01-15" },
        { name: "Shernana", dept: "IT Dept", date: "2000-03-15" }

    ];

    const today = new Date();
    const todayDate = today.getDate();

    let filtered = [];

    // 🔥 DEFAULT → HARI INI
    if (selectedMonth === 0) {
        filtered = birthdays.filter(item =>
            new Date(item.date).getDate() === todayDate
        );
    } else {
        // 🔥 FILTER BULAN
        filtered = birthdays.filter(item =>
            new Date(item.date).getMonth() + 1 === selectedMonth
        );
    }

    return (
        <div className="card birthday-card">
            <h2>🎂 BIRTHDAY</h2>

            {/* INFO MODE */}

            {filtered.length === 0 ? (
                <div className="no-birthday">
                    {selectedMonth === 0
                        ? "Tidak ada ulang tahun hari ini"
                        : "Tidak ada ulang tahun di bulan ini"}
                </div>
            ) : (
                <div className="birthday-items">
                    {filtered.map((item, index) => (
                        <div key={index} className="birthday-item">
                            <div className="birthday-name">{item.name}</div>
                            <div className="birthday-dept">{item.dept}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default BirthdayCard;