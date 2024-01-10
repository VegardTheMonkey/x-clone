export function timeAgo(date: string): string {
  const now = new Date();
  const diffInMs = now.getTime() - new Date(date).getTime();

    const diffInSec = Math.round(diffInMs / 1000);
    const diffInMin = Math.round(diffInSec / 60);
    const diffInHrs = Math.round(diffInMin / 60);
    const diffInDays = Math.round(diffInHrs / 24);
    if (diffInSec < 60) {
      return `${diffInSec} seconds ago`;
    } else if (diffInMin < 60) {
      return `${diffInMin} minutes ago`;
    } else if (diffInHrs < 24) {
      return `${diffInHrs} hours ago`;
    } else {
      return `${diffInDays} days ago`;
    }
}