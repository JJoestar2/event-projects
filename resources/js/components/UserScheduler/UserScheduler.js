import React, {useState} from "react";

import Paper from "@material-ui/core/Paper";
import {ViewState} from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    MonthView,
    WeekView,
    DayView,
    Toolbar,
    ViewSwitcher,
    Appointments,
    AppointmentTooltip,
    DateNavigator,
    TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";

const UserScheduler = (props) => {

        const [currentViewName, setСurrentViewName] = useState('work-week');
        const {data} = props;

        let date = new Date().toISOString().slice(0, 10);
        return (
            <Paper>
                <Scheduler data={data} height={600}>

                    <ViewState
                        defaultCurrentDate={date}
                        currentViewName={currentViewName}
                        onCurrentViewNameChange={setСurrentViewName}
                    />

                    <WeekView
                        startDayHour={9}
                        endDayHour={20}
                    />
                    <WeekView
                        name="work-week"
                        displayName="Work Week"
                        excludedDays={[0, 6]}
                        startDayHour={10}
                        endDayHour={20}
                    />
                    <MonthView />
                    <DayView />

                    <Toolbar />
                    <DateNavigator />
                    <TodayButton />
                    <ViewSwitcher />
                    <Appointments />
                    <AppointmentTooltip
                        showCloseButton
                        showOpenButton
                    />
                </Scheduler>
            </Paper>
        );
}

export default UserScheduler;
