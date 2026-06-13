import "./globals.css";
import ThemeRegistary from "./themeRegistary";
import { SearchProvider } from "../../components/searchContext";
import Navbar from "../../components/nav-bar";

export const metadata = {
  title: "Task Manager",
  description: "A Tool to manage your tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <ThemeRegistary initialMode="dark">
            <main style={{ paddingBottom: "80px" }}>
              {children}
            </main>
            <Navbar />
          </ThemeRegistary>
        </SearchProvider>
      </body>
    </html>
  );
}