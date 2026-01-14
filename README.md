🚌 WayToGo

WayToGo is a community-powered transit intelligence app for GO buses and trains.

Official transit apps tell you what should be happening.
WayToGo shows you what riders are actually experiencing — in real time.

It blends official transit data with crowd-sourced reports to surface more honest ETAs, early delay signals, and situational awareness during commutes.

This project is an exploration of trust, ambiguity, and real-time decision-making in a regulated public infrastructure environment.

🧭 Why WayToGo Exists

Transit riders already share critical information informally:

“Fare enforcement is on this train”

“We’ve been stuck between stations for 10 minutes”

“The official app says 2 minutes… it’s lying”

That information is valuable — but fragmented, ephemeral, and unreliable.

WayToGo formalizes this shared knowledge into a lightweight, confidence-scored signal layer that riders can actually use.

✨ Core Features (MVP)
🚆 Live Transit Map

Displays GO bus and train routes

Shows official real-time vehicle positions and ETAs

Acts as the baseline data layer

📣 Rider Reports (One-Tap)

Users can quickly report:

🚨 Fare enforcement spotted

⏸️ Train delayed / stalled

▶️ Train moving again

Reports are:

Anonymous by default

Timestamped

Location-aware

Designed for speed over detail

No free-text in MVP — friction kills participation.

📊 Confidence Scoring

Each alert includes:

Number of recent reports

Time since last report

A confidence level (Low / Medium / High)

WayToGo does not claim absolute truth.
It surfaces signal strength, letting riders decide.

⏱️ Station-to-Station ETA

Estimates time between consecutive stations

Compares historical averages vs current conditions

Highlights discrepancies caused by delays or slowdowns

This provides more realistic expectations than static schedules.

📰 Lightweight Alert Feed

Sorted by proximity and recency

Shows what’s happening near you, not everywhere

No comments, likes, or social noise

Information > engagement.

🚫 Explicitly Out of Scope (for MVP)

To stay focused and shippable, the MVP intentionally excludes:

User accounts or profiles

Messaging or chat

Gamification or rewards

Ads or monetization

Payments or fare integration

Multi-city or multi-agency support

If it doesn’t improve today’s commute, it doesn’t ship.

🧠 Design Principles

Speed beats polish — commuters are impatient

Context beats certainty — confidence over claims

Crowds correct systems — not replace them

Data decays fast — stale info is worse than no info

WayToGo is built for moments of stress, not casual browsing.

⚠️ Disclaimer

WayToGo is not affiliated with, endorsed by, or operated by any transit authority.

All rider-submitted information is voluntary, anonymous, and presented as community-reported signals — not verified facts.

🔭 Future Directions

Potential expansions (post-MVP):

Trusted reporter weighting

Delay prediction before official acknowledgment

Premium early-warning alerts

Aggregated, anonymized transit intelligence dashboards

Expansion to additional cities and agencies

🛠️ Tech Notes

This project prioritizes:

Real-time data reconciliation

Location-aware UX

Trust and confidence modeling

Ethical handling of crowd-sourced information

Exact implementation details may evolve as the project matures.

🚀 Status

WayToGo is currently in active development as an MVP.

The goal is to ship something small, honest, and genuinely useful — then iterate based on real rider behavior.
