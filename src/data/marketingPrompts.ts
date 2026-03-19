export interface EtsyMarketing {
  title: string
  description: string
  tags: string
}
export interface TikTokMarketing {
  caption: string
  hashtags: string
}
export interface InstagramMarketing {
  caption: string
  hashtags: string
}
export interface PinterestMarketing {
  title: string
  description: string
  keywords: string
}
export interface MarketingPrompts {
  etsy: EtsyMarketing
  tiktok: TikTokMarketing
  instagram: InstagramMarketing
  pinterest: PinterestMarketing
  gptImagePrompt: string
  videoPrompt: string
}

const empty: MarketingPrompts = {
  etsy:      { title: "", description: "", tags: "" },
  tiktok:    { caption: "", hashtags: "" },
  instagram: { caption: "", hashtags: "" },
  pinterest: { title: "", description: "", keywords: "" },
  gptImagePrompt: "",
  videoPrompt: "",
}

export const marketingPrompts: Record<string, MarketingPrompts> = {
  "plan-001": {
    etsy: {
      title: "Daily Weekly Monthly Planner Printable A4 – Minimalist UK Productivity Planner",
      description: "Printable daily weekly and monthly planner pages in A4 format designed for productivity, organisation, and time management. A minimalist planner printable perfect for students, professionals, and busy households in the UK.",
      tags: "planner printable, daily planner, weekly planner, monthly planner, A4 planner, UK planner, productivity planner, printable planner, minimalist planner, digital download, time management, planner inserts, student planner",
    },
    tiktok: {
      caption: "POV: your week finally makes sense because everything is in one place.",
      hashtags: "#planneraddict #productivitytok #stationerylove #printable #plannersetup #organizationtips #plannerlife #digitaldownload #ukstationery #studytok",
    },
    instagram: {
      caption: "If your days feel all over the place, this planner brings everything together. Daily, weekly, and monthly pages in one simple printable. Download it and reset your routine.",
      hashtags: "#plannerlover #printableplanner #organizeyourlife #plannersetup #weeklyplanner #dailyplanner #minimalistplanner #digitaldownload #etsyfinds #planneraddict #ukstationery #getorganized #productivityplanner",
    },
    pinterest: {
      title: "Printable Daily Weekly Monthly Planner A4 – Minimalist UK Productivity",
      description: "Printable daily weekly and monthly planner pages for organisation, productivity, and time management. A minimalist A4 planner printable for structured routines.",
      keywords: "planner printable, daily planner, weekly planner, monthly planner, A4 planner, UK planner, productivity, time management, minimalist planner",
    },
    gptImagePrompt: "flat lay A4 planner pages on neutral desk with tea mug pen linen cloth soft natural UK daylight minimal beige aesthetic clean workspace",
    videoPrompt: "Hook: messy to-do list and overwhelm. Show planner pages laid out. Write in tasks and schedule. Show clean organised desk. CTA download now.",
  },
  "plan-002": {
    etsy: {
      title: "Meal Planner & Grocery List Printable A4 – Weekly Meal Prep UK",
      description: "Printable meal planner and grocery list A4 bundle designed for weekly meal prep, food planning, and kitchen organisation. Perfect for busy UK households looking to save time and reduce food waste.",
      tags: "meal planner printable, grocery list printable, weekly meal planner, meal prep planner, A4 meal planner, UK meal planner, food planner, shopping list printable, kitchen planner, digital download, meal planning, family planner, dinner planner",
    },
    tiktok: {
      caption: "Stop asking what's for dinner every night. Plan it once and relax all week.",
      hashtags: "#mealplanning #mealpreptok #grocerylist #printable #kitchenorganization #dinnerplanning #mealplannerideas #digitaldownload #ukfoodie #busymum",
    },
    instagram: {
      caption: "This is your shortcut to stress-free dinners. Plan your meals, organise your shop, and make the week feel easier. Download your printable today.",
      hashtags: "#mealplanner #mealprep #groceryshopping #weeklymeals #eatathome #foodplanning #printableplanner #kitchenorganization #digitaldownload #mealprepping #healthymeals #familymeals #ukshopping",
    },
    pinterest: {
      title: "Meal Planner & Grocery List Printable A4 – Weekly Meal Prep Organisation",
      description: "Meal planner and grocery list printable for weekly meal prep, shopping organisation, and saving time in the kitchen.",
      keywords: "meal planner, grocery list, weekly meal planner, meal prep, food planning, kitchen organisation, shopping list, UK households",
    },
    gptImagePrompt: "flat lay meal planner and grocery list on kitchen counter vegetables wooden board soft daylight UK kitchen aesthetic neutral tones",
    videoPrompt: "Hook: open fridge confused. Show planner filling meals. Show grocery list categories. Show organised food prep. CTA download.",
  },
  "plan-003": {
    etsy: {
      title: "Budget Tracker & Expense Log Printable A4 – Monthly Finance Planner UK",
      description: "Printable budget tracker and expense log A4 bundle for monthly budgeting, bill tracking, and money management. Ideal for UK households managing expenses and saving goals.",
      tags: "budget tracker printable, expense log printable, monthly budget planner, finance tracker, A4 budget planner, UK budget planner, money management printable, bill tracker, savings tracker, digital download, debt tracker, personal finance, spending tracker",
    },
    tiktok: {
      caption: "If your money disappears every month… this will show you exactly where.",
      hashtags: "#budgeting #moneytok #financetok #savingmoney #expensetracker #printable #budgetplanner #debtfreejourney #personalfinance #ukfinance",
    },
    instagram: {
      caption: "Take control of your finances with a system that actually works. Track spending, plan your budget, and stay organised. Download now.",
      hashtags: "#budgeting #moneymanagement #budgetplanner #savingmoney #financeplanner #expensetracker #debtfree #printableplanner #digitaldownload #personalfinance #frugalliving #ukfinance #moneymindset",
    },
    pinterest: {
      title: "Budget Tracker & Expense Log Printable A4 – Monthly Finance Planner",
      description: "Budget tracker and expense log printable for managing money, tracking spending, and planning finances.",
      keywords: "budget tracker, expense log, monthly budget, finance planner, money management, bill tracker, savings tracker, UK finance, debt tracker",
    },
    gptImagePrompt: "flat lay budget tracker sheets calculator receipts pen neutral tones UK desk soft light minimal aesthetic",
    videoPrompt: "Hook: checking bank app stress. Show budget page. Show expense tracking. Highlight totals. CTA download.",
  },
  "plan-004": {
    etsy: {
      title: "Fitness Workout Log Printable A4 – Exercise Tracker & Gym Sheets",
      description: "Printable fitness and workout log A4 sheets for tracking exercises, sets, reps, and progress. Perfect for gym routines and home workouts.",
      tags: "workout log printable, fitness tracker printable, exercise log, gym planner, A4 workout log, fitness planner, weight training log, progress tracker, sets reps tracker, digital download, home workout, gym journal, strength training",
    },
    tiktok: {
      caption: "If you don't track your workouts, you're guessing your progress.",
      hashtags: "#workoutlog #fitnesstok #gymlife #exercisetracker #progresstracking #printable #fitnessplanner #gymjournal #strengthtraining #ukfitness",
    },
    instagram: {
      caption: "Consistency gets easier when you can see your progress. Track every session and stay motivated. Download now.",
      hashtags: "#workoutlog #fitnessplanner #gymlife #exercisetracker #strengthtraining #progresstracking #printableplanner #digitaldownload #fitnessmotivation #gymjournal #homeworkout #fitgirl #ukfitness",
    },
    pinterest: {
      title: "Fitness Workout Log Printable A4 – Gym Exercise Tracker & Progress Sheets",
      description: "Workout log printable for tracking fitness progress, gym routines, and strength training.",
      keywords: "workout log, fitness tracker, exercise log, gym planner, sets reps, progress tracker, home workout, strength training, fitness planner",
    },
    gptImagePrompt: "flat lay workout log on gym floor dumbbells towel water bottle dark neutral tones fitness aesthetic",
    videoPrompt: "Hook: random workout. Show log sheet. Fill exercises. Show progress. CTA.",
  },
  "plan-005": {
    etsy: {
      title: "Habit Tracker Printable A4 – 30 Day & 90 Day Routine Builder",
      description: "Printable 30-day and 90-day habit tracker A4 sheets for building routines and staying consistent. Ideal for productivity, fitness, and personal goals.",
      tags: "habit tracker printable, 30 day habit tracker, 90 day habit tracker, routine tracker, A4 habit tracker, daily habit tracker, goal tracker, self improvement printable, digital download, productivity planner, consistency tracker, mindset planner",
    },
    tiktok: {
      caption: "This is how you actually stay consistent for once.",
      hashtags: "#habittracker #habittok #selfimprovement #routinebuilding #printable #consistency #goalsetting #digitaldownload #habitbuilding #mindsetshift",
    },
    instagram: {
      caption: "Small habits add up fast when you track them. Stay accountable and see your progress every day. Download now.",
      hashtags: "#habittracker #selfimprovement #buildinghabits #routinecheck #goalsetting #consistencyiskey #printableplanner #digitaldownload #personaldevelopment #mindset #30daychallenge #90daychallenge #productivehuman",
    },
    pinterest: {
      title: "Habit Tracker Printable A4 – 30 Day & 90 Day Routine & Goal Builder",
      description: "Habit tracker printable for building routines, tracking progress, and staying consistent with goals.",
      keywords: "habit tracker, 30 day tracker, 90 day tracker, routine builder, goal tracker, self improvement, consistency tracker, productivity planner, daily habits",
    },
    gptImagePrompt: "flat lay habit tracker printable minimal design neutral desk pen coffee soft lighting clean aesthetic",
    videoPrompt: "Hook: failed habits. Show tracker. Check off days. Show progress. CTA.",
  },
  "plan-006": {
    etsy: {
      title: "Wedding Planner Printable A4 – Checklist Timeline Budget & Guest List",
      description: "Printable wedding planning checklist and timeline A4 bundle for organising your wedding from start to finish. Includes budget, guest list, and vendor tracking.",
      tags: "wedding planner printable, wedding checklist, wedding timeline, wedding budget tracker, A4 wedding planner, UK wedding planner, guest list tracker, vendor tracker, bridal planner, digital download, wedding organiser, DIY wedding, bride to be",
    },
    tiktok: {
      caption: "Planning a wedding without this is chaos.",
      hashtags: "#weddingtok #weddingplanning #bridetobe #weddingchecklist #printable #weddingorganiser #DIYwedding #weddingideas #ukwedding #etsywedding",
    },
    instagram: {
      caption: "Wedding planning feels so much easier when everything is organised in one place. Plan your big day with less stress. Download now.",
      hashtags: "#weddingtips #weddingplanning #bridetobe #weddingchecklist #weddingorganiser #printablewedding #weddingbudget #guestlist #weddingday #diywedding #ukwedding #weddinginspo #futuremrs",
    },
    pinterest: {
      title: "Wedding Planner Printable A4 – Checklist Timeline Budget Guest List",
      description: "Wedding planner printable with checklist, timeline, and budget tracker for organised wedding planning.",
      keywords: "wedding planner, wedding checklist, wedding timeline, wedding budget, guest list, vendor tracker, bridal planner, UK wedding, DIY wedding",
    },
    gptImagePrompt: "flat lay wedding planner pages with rings flowers blush tones soft light romantic aesthetic",
    videoPrompt: "Hook: wedding chaos. Show planner. Flip sections. Highlight timeline. CTA.",
  },
  "plan-007": {
    etsy: {
      title: "Travel Planner Printable A4 – Itinerary Packing List & Holiday Organiser",
      description: "Printable travel itinerary planner A4 sheets for organising trips, packing lists, and travel schedules. Perfect for holidays and city breaks.",
      tags: "travel planner printable, travel itinerary printable, packing list printable, holiday planner, A4 travel planner, UK travel planner, trip planner, vacation planner, travel budget tracker, digital download, travel organiser, city break planner, travel journal",
    },
    tiktok: {
      caption: "Want a stress-free holiday? Start here.",
      hashtags: "#traveltok #travelplanning #packinglist #holidayplanning #printable #travelorganiser #tripplanning #vacationplanning #uktravel #etsytravel",
    },
    instagram: {
      caption: "Plan your trip without the stress. Keep everything from flights to packing in one place. Download your travel planner now.",
      hashtags: "#travelplanning #traveltips #packinglist #holidayvibes #tripplanning #travelorganiser #printabletraveller #adventureplanning #digitaldownload #uktravel #travelblogger #vacationmode #exploringtheworld",
    },
    pinterest: {
      title: "Travel Planner Printable A4 – Itinerary Packing List Holiday Organiser",
      description: "Travel planner printable with itinerary, packing list, and trip organisation sheets.",
      keywords: "travel planner, travel itinerary, packing list, holiday planner, trip planner, vacation planner, travel budget, city break, travel journal",
    },
    gptImagePrompt: "flat lay travel planner passport sunglasses map soft sunlight neutral tones travel aesthetic",
    videoPrompt: "Hook: travel stress. Show planner. Fill itinerary. Show packing list. CTA.",
  },
  "plan-008": {
    etsy: {
      title: "Cleaning Schedule Printable A4 – Daily Weekly Monthly Chore Chart",
      description: "Printable cleaning schedule and chore chart A4 sheets for keeping your home organised and tidy. Includes daily, weekly, and monthly routines.",
      tags: "cleaning schedule printable, chore chart printable, weekly cleaning schedule, daily cleaning checklist, A4 cleaning planner, UK cleaning schedule, home organisation printable, room cleaning checklist, monthly cleaning, digital download, housekeeping planner, tidy home",
    },
    tiktok: {
      caption: "If cleaning feels overwhelming… this fixes it.",
      hashtags: "#cleaningtok #cleantok #chorechart #cleaningschedule #printable #homeorganisation #tidyhome #cleaningroutine #ukclean #housekeeping",
    },
    instagram: {
      caption: "A clean home starts with a simple plan. Stay on top of everything without the stress. Download now.",
      hashtags: "#cleaningroutine #chorelife #homeorganisation #cleaningtips #tidyhome #chorecheck #printablecleaning #digitaldownload #cleaninglover #housework #ukclean #dailyclean #etsyhome",
    },
    pinterest: {
      title: "Cleaning Schedule Printable A4 – Daily Weekly Monthly Chore Chart",
      description: "Cleaning schedule printable for organising daily, weekly, and monthly household tasks.",
      keywords: "cleaning schedule, chore chart, weekly cleaning, daily cleaning, home organisation, room checklist, monthly cleaning, housekeeping, tidy home",
    },
    gptImagePrompt: "flat lay cleaning schedule printable spray bottle cloth neutral tones bright light clean home aesthetic",
    videoPrompt: "Hook: messy room. Show checklist. Tick tasks. Show clean result. CTA.",
  },
  "plan-009": {
    etsy: {
      title: "Home Renovation Planner Printable A4 – DIY Project Budget & Timeline Tracker",
      description: "Printable home renovation planner A4 sheets for tracking budgets, timelines, and materials. Ideal for organising DIY and home improvement projects.",
      tags: "home renovation planner, renovation budget tracker, DIY project planner, home improvement tracker, A4 renovation planner, UK renovation planner, contractor tracker, materials list, project timeline printable, digital download, house renovation, home makeover planner",
    },
    tiktok: {
      caption: "Renovating without a plan? Good luck.",
      hashtags: "#renovationtok #DIYhome #homerenovation #renovationplanning #printable #projectplanner #homeimprovement #budgetrenovation #ukhome #interiordesign",
    },
    instagram: {
      caption: "Keep your renovation on track and within budget with this planner. Stay organised from start to finish. Download now.",
      hashtags: "#homerenovation #renovationlife #diyhome #projectplanning #homeimprovement #renovationtips #printableplanner #digitaldownload #houseproject #budgetrenovation #ukhome #makeover #homedesign",
    },
    pinterest: {
      title: "Home Renovation Planner Printable A4 – DIY Budget Timeline & Project Tracker",
      description: "Home renovation planner printable for budgeting, project timelines, and materials tracking.",
      keywords: "home renovation planner, DIY project planner, renovation budget, project timeline, materials list, contractor tracker, home improvement, UK renovation",
    },
    gptImagePrompt: "flat lay renovation planner blueprint pencil tools neutral tones workspace aesthetic",
    videoPrompt: "Hook: renovation mess. Show planner. Fill budget. Track progress. CTA.",
  },
  "plan-010": {
    etsy: {
      title: "Pet Care Log Printable A4 – Feeding Schedule Vet Visit & Health Tracker",
      description: "Printable pet care log A4 sheets for tracking feeding schedules, vet visits, and pet health. Perfect for keeping your pet's routine organised.",
      tags: "pet care log printable, pet health tracker, feeding schedule printable, vet visit tracker, A4 pet planner, dog care log, cat care log, pet medication tracker, UK pet planner, digital download, pet routine planner, pet organiser, puppy log, kitten log",
    },
    tiktok: {
      caption: "Pet parents… you need this tracker.",
      hashtags: "#petcare #dogtok #cattok #petorganisation #printable #petlog #petmom #petdad #vetvisitracker #ukpetowner",
    },
    instagram: {
      caption: "Keep your pet's routine organised and stress-free. Track everything from feeding to vet visits in one place. Download now.",
      hashtags: "#petcare #petlovers #dogmom #catmom #petorganisation #petlog #feedingschedule #vetvisit #printableplanner #digitaldownload #petparent #furbabylife #ukpets",
    },
    pinterest: {
      title: "Pet Care Log Printable A4 – Feeding Vet Visit & Health Tracker",
      description: "Pet care log printable for tracking feeding, health, and routines for dogs and cats.",
      keywords: "pet care log, pet health tracker, feeding schedule, vet visit tracker, dog care, cat care, pet routine, pet organiser, UK pets",
    },
    gptImagePrompt: "flat lay pet care log printable with leash bowl toy soft neutral tones cozy home lighting",
    videoPrompt: "Hook: pet routine chaos. Show log. Fill entries. Show happy pet. CTA.",
  },
  "art-001": { ...empty },
  "art-002": { ...empty },
  "art-003": { ...empty },
  "art-004": { ...empty },
  "art-005": { ...empty },
  "art-006": { ...empty },
  "art-007": { ...empty },
  "art-008": { ...empty },
  "art-009": { ...empty },
  "art-010": { ...empty },
  "social-001": { ...empty },
  "social-002": { ...empty },
  "social-003": { ...empty },
  "social-004": { ...empty },
  "social-005": { ...empty },
  "social-006": { ...empty },
  "social-007": { ...empty },
  "social-008": { ...empty },
  "social-009": { ...empty },
  "social-010": { ...empty },
  "biz-001": { ...empty },
  "biz-002": { ...empty },
  "biz-003": { ...empty },
  "biz-004": { ...empty },
  "biz-005": { ...empty },
  "biz-006": { ...empty },
  "biz-007": { ...empty },
  "biz-008": { ...empty },
  "biz-009": { ...empty },
  "biz-010": { ...empty },
  "edu-001": { ...empty },
  "edu-002": { ...empty },
  "edu-003": { ...empty },
  "edu-004": { ...empty },
  "edu-005": { ...empty },
  "edu-006": { ...empty },
  "edu-007": { ...empty },
  "edu-008": { ...empty },
  "edu-009": { ...empty },
  "edu-010": { ...empty },
  "journal-001": { ...empty },
  "journal-002": { ...empty },
  "journal-003": { ...empty },
  "journal-004": { ...empty },
  "journal-005": { ...empty },
  "journal-006": { ...empty },
  "journal-007": { ...empty },
  "journal-008": { ...empty },
  "journal-009": { ...empty },
  "journal-010": { ...empty },
  "notion-001": { ...empty },
  "notion-002": { ...empty },
  "notion-003": { ...empty },
  "notion-004": { ...empty },
  "notion-005": { ...empty },
  "notion-006": { ...empty },
  "notion-007": { ...empty },
  "notion-008": { ...empty },
  "notion-009": { ...empty },
  "notion-010": { ...empty },
  "asset-001": { ...empty },
  "asset-002": { ...empty },
  "asset-003": { ...empty },
  "asset-004": { ...empty },
  "asset-005": { ...empty },
  "asset-006": { ...empty },
  "asset-007": { ...empty },
  "asset-008": { ...empty },
  "asset-009": { ...empty },
  "asset-010": { ...empty },
  "event-001": { ...empty },
  "event-002": { ...empty },
  "event-003": { ...empty },
  "event-004": { ...empty },
  "event-005": { ...empty },
  "event-006": { ...empty },
  "event-007": { ...empty },
  "event-008": { ...empty },
  "event-009": { ...empty },
  "event-010": { ...empty },
  "sheet-001": { ...empty },
  "sheet-002": { ...empty },
  "sheet-003": { ...empty },
  "sheet-004": { ...empty },
  "sheet-005": { ...empty },
  "sheet-006": { ...empty },
  "sheet-007": { ...empty },
  "sheet-008": { ...empty },
  "sheet-009": { ...empty },
  "sheet-010": { ...empty },
}
