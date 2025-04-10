export function timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  
    const intervals = [
      { sec: 60, unit: 'second' },
      { sec: 60 * 60, unit: 'minute' },
      { sec: 60 * 60 * 24, unit: 'hour' },
      { sec: 60 * 60 * 24 * 7, unit: 'day' },
      { sec: 60 * 60 * 24 * 30, unit: 'week' },
      { sec: 60 * 60 * 24 * 365, unit: 'month' },
      { sec: Infinity, unit: 'year' }
    ];
  
    for (let i = 0; i < intervals.length; i++) {
        console.log(i);
        console.log(seconds);
        console.log(intervals[i].sec);
      if (seconds < intervals[i].sec) {
        
        const prev = intervals[i - 1];
        const value = Math.floor(seconds / prev.sec);
        return rtf.format(-value, intervals[i].unit);
      }
    }
}