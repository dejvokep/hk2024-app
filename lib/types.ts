export const TIME_SPANS = {
    "1D": {
        last: 1,
        label: "Day",
        mod: (d: Date) => d.setDate(d.getDate() - 1)
    },
    "1W": {
        last: 7,
        label: "Week",
        mod: (d: Date) => d.setDate(d.getDate() - 7)
    },
    "1M": {
        last: 30,
        label: "Month",
        mod: (d: Date) => d.setMonth(d.getMonth() - 1)
    },
    "1Y": {
        last: 365,
        label: "Year",
        mod: (d: Date) => d.setFullYear(d.getFullYear() - 1)
    },
    "All": {
        last: 0,
        label: "All time",
        mod: (d: Date) => d.setFullYear(d.getFullYear() - 1)
    },
}