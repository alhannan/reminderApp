import "./AppBar.scss";
import { LogoutButton } from "../Fields";

function AppBar({ setReminderType, reminderType }) {
  return (
    <div className="AppBar">
      <h3>ReminderApp</h3>
      <div className="reminderType">
        <div className={`type ${reminderType === 1 ? "selected" : ""}`} onClick={() => setReminderType(1)}>
          My Reminders
        </div>
        <div className={`type ${reminderType === 2 ? "selected" : ""}`} onClick={() => setReminderType(2)}>
          Shared Reminders
        </div>
      </div>
      <LogoutButton />
    </div>
  );
}

export default AppBar;
