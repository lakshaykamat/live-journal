export function formatDate(dateString: string): string {
    const parsedDate = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = parsedDate.toLocaleDateString('en-US', options);
    return formattedDate;
}
