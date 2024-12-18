export function formatTimeToSeconds(time: string) {
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(':');

    return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
}

export function formatSecondsToTime(time: number = 0): string[] {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteTen, minuteUnit] = minutes.toString().padStart(2, '0');
    const [secondTen, secondUnit] = seconds.toString().padStart(2, '0');

    return [minuteTen, minuteUnit, secondTen, secondUnit];
}