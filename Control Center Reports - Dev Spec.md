# Control Center reports – Dashboard & Alerts (dev spec)

Reference design: `Control Center Reports.dc.html`

## Entry point & shell
- Main nav: Alerts (bell) opens a floating sub-menu over the page: Alerts Monitoring, Create Alert, Alerts Configuration, Alerts Groups | divider | Control Center settings, Control Center reports.
- "Control Center reports" opens this page; selected item highlighted in the sub-menu.
- Header: breadcrumb `Alerts › Control Center reports`. No page title element.
- Tabs (top left, under header): **Dashboard** (default) | **Alerts**.
- Each tab keeps its own filters. Switching tabs restores that tab's last filters.

## Filters (both tabs)
- Single row, left aligned, wraps on narrow widths. **Clear** is the last item in the row and resets that tab's filters only.
- Dashboard: Date, Location, Camera, Alert type, Resolution, Priority, Clear.
- Alerts: Search, Date, Location, Camera, Alert type, Resolution, Priority, Clear.
- Camera options are limited to the selected location.
- Resolution options: Verified, Unverified, Unclear.
- Priority options: Critical, High.

### Date filter (standard Lumana date picker)
- Trigger shows current range, e.g. "Last 7 days" (default).
- Popover tabs: **Relative** | **Calendar**; site time zone label on the right (EST).
- Relative: preset chips – Minutes 5/10/15/20/30/45, Hours 1/2/3/6/8/12, Days 1–6, Weeks 1–4; plus numeric input + unit select (Minutes/Hours/Days/Weeks).
- Calendar: two months side by side, prev/next arrows, future dates disabled. First click = start, second = end; range highlighted. From/To each have date field + time select (30 min steps).
- Footer: Cancel (discard), Done (apply). Done disabled in Calendar until From and To are set and To > From.

### Search (Alerts tab only)
- Free text over: alert ID, alarm ID, camera, location, partition, alert type, operator label, resolution.

## Dashboard tab
- KPI cards: Alerts sent, Handled, In progress, Median time to respond, Median resolution time. Alerts sent / Handled / In progress are clickable and open the Alerts tab filtered by that status.
- **Alerts sent by resolution**: stacked bar chart – Verified, Unverified, Unclear, In progress. Bucket size follows the date range: 5 min (≤2 h), 30 min (≤12 h), hourly (≤2 d), daily otherwise. Legend top right.
- **What stands out**: short generated insights (unverified rate, camera with most unverified alerts, police dispatched count, handler split).
- Tiles: **By resolution** (handled alerts), **By priority** (all alerts). Horizontal bars with count and %.
- **Alerts generating most incidents** (table, top 8, sorted by incident count): Alert, Location, Sent, Handled, Unverified rate, Median time to respond, Median resolution time. Incident = alert resolved as Verified.
- **Cameras sending the most alerts** (table, top 8, sorted by Sent): Camera, Location, Sent, Handled, Unverified rate, Median time to respond, Median resolution time.
- Unverified rate shown in orange when ≥75% and Handled ≥3.
- Row click (both tables) opens Alerts tab filtered to that row (camera, or alert type + location). Carries over the Dashboard date range only.

## Alerts tab
- Status chips above filters: count per status (In progress, Handled); click to filter.
- Above table: "Showing X of Y alerts" (left); "All times in site time (EST)" + **Export CSV** button (right).
- Table, 72px rows, first column sticky, horizontal scroll:
  - **Alert**: thumbnail, alert name (bold), alert message below (e.g. "Person is loitering for more than 3 seconds in a restricted area"). Hover shows tooltip with alert ID + Copy button ("Copied" after click; does not open the drawer).
  - Start time (sortable), Priority badge (sortable), Status badge, Resolution, Resolution time (sortable), Operator, Location, Partition, Zone, Last update, Close time.
- Resolution cell: resolution + verification line. Alerts **In progress have no resolution** ("—", no verification line).
- Operator column never shows Control Center operator names – always "Control center operator". Noonlight is shown by name.
- Pagination: "Show more" loads 50 more rows.
- Empty state: "No alerts found" / "Try adjusting your search or filter."

## Alert details drawer
- Opens on row click. Standard design-system Drawer (same as SOP editor): dimmed backdrop, right side, close button, footer with **Close**.
- Title: alert type. Below: time and date.
- Header info: status badge, priority badge, operator chip ("Control center operator"), resolution badge (hidden when In progress), verification verdict; location › partition, camera, alert ID.
- Tabs: Overview (Playback / Object / Live views with view switcher) and Log (timeline filterable by All / VMS+ / Control Center).
- Timeline entries never show operator names.

## Rules
- All alerts are handled by an operator; no automatic closing.
- Resolutions are only Verified, Unverified, Unclear.
- Times shown in site time zone.
- Design system: Lumana lumix-cloud (Satoshi, 4px radius, tokens only, dark and light themes).
