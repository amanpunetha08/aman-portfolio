export type Priority = 'High' | 'Medium' | 'Low'
export type Difficulty = 'Easy' | 'Medium' | 'Hard'
export type Status = 'Overdue' | 'Scheduled' | 'Completed'

export interface TrackerTopic {
  topic: string
  part: number
  pdf: string
  priority: Priority
  difficulty: Difficulty
  status: Status
  scheduledDate: string
}

export const trackerData: TrackerTopic[] = [
  { topic: 'How Stock Exchange Works', part: 1, pdf: '/pdfs/The System Design Newsletter - How Stock Exchange Works.pdf', priority: 'High', difficulty: 'Medium', status: 'Overdue', scheduledDate: '15-Apr-26' },
  { topic: 'How Stock Exchange Works', part: 2, pdf: '/pdfs/The System Design Newsletter - How Stock Exchange Processes 6 Million Events per Second with Microsecond Latency.pdf', priority: 'High', difficulty: 'Medium', status: 'Overdue', scheduledDate: '19-Apr-26' },
  { topic: 'How Stock Exchange Works', part: 3, pdf: '/pdfs/The System Design Newsletter - Design Stock Exchange - A Deep Dive.pdf', priority: 'High', difficulty: 'Hard', status: 'Overdue', scheduledDate: '20-Apr-26' },
  { topic: 'How WhatsApp Works', part: 1, pdf: '/pdfs/The System Design Newsletter - System Design Interview_ Design WhatsApp.pdf', priority: 'High', difficulty: 'Medium', status: 'Overdue', scheduledDate: '22-Apr-26' },
  { topic: 'How WhatsApp Works', part: 2, pdf: '/pdfs/The System Design Newsletter - System Design Question_ Design WhatsApp.pdf', priority: 'Medium', difficulty: 'Hard', status: 'Overdue', scheduledDate: '22-Apr-26' },
  { topic: 'How Spotify Works', part: 0, pdf: '/pdfs/The System Design Newsletter - System Design Interview Question_ Design Spotify.pdf', priority: 'Medium', difficulty: 'Easy', status: 'Overdue', scheduledDate: '23-Apr-26' },
  { topic: 'How Reddit Works', part: 0, pdf: '/pdfs/The System Design Newsletter - How Reddit Works 🔥.pdf', priority: 'High', difficulty: 'Easy', status: 'Overdue', scheduledDate: '24-Apr-26' },
  { topic: 'How Bluesky Works', part: 0, pdf: '/pdfs/The System Design Newsletter - How Bluesky Works 🦋.pdf', priority: 'Low', difficulty: 'Medium', status: 'Overdue', scheduledDate: '24-Apr-26' },
  { topic: 'How ChatGPT Works', part: 0, pdf: '/pdfs/The System Design Newsletter - System Design Interview_ Design ChatGPT.pdf', priority: 'High', difficulty: 'Medium', status: 'Overdue', scheduledDate: '27-Apr-26' },
  { topic: 'How Google Docs Works', part: 0, pdf: '/pdfs/The System Design Newsletter - How Does Google Docs Work 🔥.pdf', priority: 'High', difficulty: 'Hard', status: 'Overdue', scheduledDate: '28-Apr-26' },
  { topic: 'How Kafka Works', part: 0, pdf: '/pdfs/The System Design Newsletter - How kafka works.pdf', priority: 'High', difficulty: 'Easy', status: 'Overdue', scheduledDate: '01-May-26' },
  { topic: 'How Tinder Works', part: 0, pdf: '/pdfs/The System Design Newsletter - How Tinder Scaled to 1.6 Billion Swipes per Day.pdf', priority: 'Medium', difficulty: 'Medium', status: 'Overdue', scheduledDate: '03-May-26' },
  { topic: 'How Slack Works', part: 0, pdf: '/pdfs/Slack Architecture - System Design.pdf', priority: 'High', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '06-May-26' },
  { topic: 'How Twitter Timeline Works', part: 0, pdf: '/pdfs/X Timeline - A Frontend Deep Dive.pdf', priority: 'Low', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '07-May-26' },
  { topic: 'How Amazon S3 Works', part: 0, pdf: '/pdfs/The System Design Newsletter - Amazon S3 - A Deep Dive.pdf', priority: 'Medium', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '10-May-26' },
  { topic: 'How URL Shortener Works', part: 0, pdf: '/pdfs/URL Shortening System Design - System Design.pdf', priority: 'High', difficulty: 'Easy', status: 'Scheduled', scheduledDate: '13-May-26' },
  { topic: 'How Pastebin Works', part: 0, pdf: '/pdfs/System Design Pastebin - System Design.pdf', priority: 'Medium', difficulty: 'Easy', status: 'Scheduled', scheduledDate: '13-May-26' },
  { topic: 'Meta Serverless Architecture', part: 0, pdf: '/pdfs/The System Design Newsletter - How Meta Serverless Handles 11.5 Million Function Calls per Second.pdf', priority: 'Low', difficulty: 'Hard', status: 'Scheduled', scheduledDate: '14-May-26' },
  { topic: 'How Uber Finds Nearby Drivers', part: 0, pdf: '/pdfs/The System Design Newsletter - How Uber Finds Nearby Drivers at 1 Million Requests per Second.pdf', priority: 'High', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '14-May-26' },
  { topic: 'How Uber Computes ETA', part: 0, pdf: '/pdfs/The System Design Newsletter - How Uber Computes ETA at Half a Million Requests per Second.pdf', priority: 'High', difficulty: 'Hard', status: 'Scheduled', scheduledDate: '17-May-26' },
  { topic: 'How Lyft Works', part: 0, pdf: '/pdfs/The System Design Newsletter - How Lyft Support Rides to 21 Millons Users.pdf', priority: 'High', difficulty: 'Easy', status: 'Scheduled', scheduledDate: '18-May-26' },
  { topic: 'Idempotent API 101', part: 0, pdf: '/pdfs/The System Design Newsletter - How Stripe Prevents Double Payment Using Idempotent API.pdf', priority: 'High', difficulty: 'Easy', status: 'Scheduled', scheduledDate: '19-May-26' },
  { topic: 'How Real-Time Leaderboard Works', part: 0, pdf: '/pdfs/Leaderboard System Design - System Design.pdf', priority: 'Medium', difficulty: 'Hard', status: 'Scheduled', scheduledDate: '22-May-26' },
  { topic: 'How YouTube Scaled MySQL', part: 0, pdf: '/pdfs/The System Design Newsletter - How YouTube Was Able to Support 2.49 Billion Users With MySQL.pdf', priority: 'Medium', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '23-May-26' },
  { topic: 'Live Comment System Design', part: 0, pdf: '/pdfs/Live Comment System Design - System Design.pdf', priority: 'Medium', difficulty: 'Hard', status: 'Scheduled', scheduledDate: '24-May-26' },
  { topic: 'How to Scale an App on AWS', part: 0, pdf: '/pdfs/The System Design Newsletter - How to Scale an App to 10 Million Users on AWS.pdf', priority: 'High', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '25-May-26' },
  { topic: 'How Real Time Presence Platform Works', part: 0, pdf: '/pdfs/Real Time Presence Platform System Design - System Design.pdf', priority: 'Low', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '27-May-26' },
  { topic: 'How to Scale an App on GCP', part: 0, pdf: '/pdfs/The System Design Newsletter - How to Scale an App to 100 Million Users on GCP 🚀.pdf', priority: 'High', difficulty: 'Easy', status: 'Scheduled', scheduledDate: '28-May-26' },
  { topic: 'Distributed Counter System Design', part: 0, pdf: '/pdfs/Distributed Counter System Design - System Design.pdf', priority: 'Medium', difficulty: 'Hard', status: 'Scheduled', scheduledDate: '28-May-26' },
  { topic: 'How Apple AirTags Work', part: 0, pdf: '/pdfs/The System Design Newsletter - How Do AirTags Works.pdf', priority: 'Medium', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '28-May-26' },
  { topic: 'How Google Search Works', part: 0, pdf: '/pdfs/The System Design Newsletter - How Google Search Works 🔥.pdf', priority: 'High', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '30-May-26' },
  { topic: 'Instagram Scalability 101', part: 0, pdf: '/pdfs/The System Design Newsletter - How Instagram Scaled to 2.5 Billion Users.pdf', priority: 'Medium', difficulty: 'Hard', status: 'Scheduled', scheduledDate: '02-Jun-26' },
  { topic: 'How Nginx Works', part: 0, pdf: '/pdfs/The System Design Newsletter - How Ngins Was able to support 1 Millons Concurrent Connections on a Single Server .pdf', priority: 'Low', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '04-Jun-26' },
  { topic: 'How Google Scaled SQL Database', part: 0, pdf: '/pdfs/The System Design Newsletter - How Google Ads Was able to support 4.77 Billons Users with a SQL Database.pdf', priority: 'High', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '07-Jun-26' },
  { topic: 'High Availability', part: 0, pdf: '/pdfs/The System Design Newsletter - A Crash Course on High Availability.pdf', priority: 'High', difficulty: 'Hard', status: 'Scheduled', scheduledDate: '10-Jun-26' },
  { topic: 'How YouTube Works', part: 0, pdf: '/pdfs/The System Design Newsletter - System Design Interview_ Design YouTube.pdf', priority: 'High', difficulty: 'Medium', status: 'Scheduled', scheduledDate: '11-Jun-26' },
  { topic: 'How Airbnb Works', part: 0, pdf: '/pdfs/The System Design Newsletter - System Design Interview_ Design Airbnb.pdf', priority: 'High', difficulty: 'Hard', status: 'Scheduled', scheduledDate: '13-Jun-26' },
]

export const TRACKER_START_DATE = '15-Apr-2026'
