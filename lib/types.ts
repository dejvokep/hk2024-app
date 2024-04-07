import {z} from "zod";

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
        last: 365,
        label: "All time",
        mod: (d: Date) => d.setFullYear(d.getFullYear() - 1)
    },
}

export type OnboardingData = {
    experience?: string,
    length?: string,
    investment?: string,
    risk?: string,
    interests?: Industries[],
    goal?: {
        name?: string,
        value?: number
    }
}

export type Industries = "INDUSTRIAL" | "TECHNOLOGY" | "ENERGY" | "REAL_ESTATE" | "FINANCE" | "HEALTHCARE" | "CONSUMER_DISCRETIONARY" | "MATERIALS" | "CONSUMER_STAPLES" | "UTILITIES" | "TELECOMMUNICATIONS";

export const IndustryMappers = {
    "INDUSTRIAL": "Industrial",
"TECHNOLOGY": "Technology",
"ENERGY": "Energy",
"REAL_ESTATE": "Real Estate",
"FINANCE": "Finance",
"HEALTHCARE": "Health Care",
"CONSUMER_DISCRETIONARY": "Consumer Discretionary",
"MATERIALS": "Materials",
"CONSUMER_STAPLES": "Consumer Staples",
"UTILITIES": "Utilities",
"TELECOMMUNICATIONS": "Telecommunications"
}

export const ASSISTANT_SCHEMA = z.object({
    text: z.string().min(8).max(64)
})

export const SEARCH_SCHEMA = z.object({
    text: z.string().min(2).max(8)
})