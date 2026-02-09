import { AboutTab } from "./MapTabContent/AboutTab";
import { AccountPreferencesTab } from "./MapTabContent/AccountPreferencesTab";
import { DarkModeTab } from "./MapTabContent/DarkMode";
import { NotificationTab } from "./MapTabContent/NotificationTab";
import { PrivacyAndSecurityTab } from "./MapTabContent/PrivacyAndSecurityTab";

export const ComponentMap = {
  darkmode: DarkModeTab,
  notifications: NotificationTab,
  accountPreferences: AccountPreferencesTab,
  about: AboutTab,
  privacyandsecurity: PrivacyAndSecurityTab,
};
