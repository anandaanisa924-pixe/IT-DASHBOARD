import React, { useState } from 'react';
import Header from '../components/Header';
import CalendarCard from '../components/CalendarCard';
import BirthdayCard from '../components/BirthdayCard';
import WorkOrdersCard from '../components/WorkOrdersCard';
import DailyReviewCard from '../components/DailyReviewCard';
import TicketStatusCard from '../components/TicketStatusCard';
import AnnouncementCard from '../components/AnnouncementCard';
import InfrastructureCard from '../components/InfrastructureCard';
import NoBirthdayCard from '../components/NoBirthdayCard';
import StatusFooter from '../components/StatusFooter';
import '../styles/dashboard.css';

function Dashboard() {

    // 🔥 STATE FILTER BULAN
    const [selectedMonth, setSelectedMonth] = useState(0); // 0 = semua

    return (
        <div className="dashboard">
            <Header />
            
            <div className="dashboard-grid">

                {/* LEFT */}
                <div className="left-section">
                    <CalendarCard />

                    <div className="birthday-wrapper">
                        <BirthdayCard selectedMonth={selectedMonth} />

                        <NoBirthdayCard 
                            selectedMonth={selectedMonth}
                            setSelectedMonth={setSelectedMonth}
                        />

                        <StatusFooter />
                    </div>
                </div>

                {/* MIDDLE */}
                <div className="middle-section">
                    <WorkOrdersCard />
                    <DailyReviewCard />
                </div>

                {/* RIGHT */}
                <div className="right-section">
                    <TicketStatusCard />
                    <InfrastructureCard />
                    <AnnouncementCard />
                </div>

            </div>
        </div>
    );
}

export default Dashboard;