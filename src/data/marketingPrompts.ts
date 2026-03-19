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
  "art-001": {
    etsy: {
      title: "Minimalist Line Art Prints Set of 6 – Continuous Line Wall Art Printable, Scandinavian Abstract Figure Art",
      description: "A set of 6 minimalist continuous line art prints featuring an abstract female figure, face outline, hands, body curve, plant drawing, and abstract organic shape. Black on white Scandinavian-style wall art, perfect for a modern gallery wall. Instant digital download in A4 and A3 ratios at 300 DPI.",
      tags: "line art print, minimalist wall art, continuous line drawing, Scandinavian print, abstract figure art, face line art, botanical line art, printable wall art, digital download, gallery wall, black and white print, modern home decor, instant download",
    },
    tiktok: {
      caption: "One line. No lifting the pen. That's the whole vibe of this print set.",
      hashtags: "#minimalart #lineartprint #wallartprint #scandinaviandesign #printablewalldecor #abstractart #gallerywallinspo #digitaldownload #homedecortok #etsyseller",
    },
    instagram: {
      caption: "Six prints. One continuous line each. No fuss, just clean Scandinavian style that works in any room. Download, print, frame. Done.",
      hashtags: "#lineartprint #minimalistwalldecor #scandinavianstyle #abstractlineart #printablewallart #gallerywallinspo #digitaldownload #etsyfinds #modernhomedecor #blackandwhiteart #continuouslinedrawing #minimalprint",
    },
    pinterest: {
      title: "Minimalist Continuous Line Art Print Set – Scandinavian Abstract Wall Art Printable",
      description: "Set of 6 black on white continuous line art prints. Abstract female figure, face, hands, plant, and organic shapes. A4 and A3 instant digital download.",
      keywords: "line art print, minimalist wall art, Scandinavian print, continuous line drawing, abstract figure, printable wall art, gallery wall, black and white art",
    },
    gptImagePrompt: "six minimalist black line art prints framed in thin black frames on a white wall above a neutral linen sofa Scandinavian interior soft natural light clean aesthetic",
    videoPrompt: "Hook: bare white wall looking empty. Show prints being framed one by one. Final reveal of full gallery wall arrangement. CTA: download the set and transform your wall.",
  },
  "art-002": {
    etsy: {
      title: "Inspirational Quote Posters Set of 8 – Minimalist Typography Prints, Modern Wall Art Printable",
      description: "A set of 8 short inspirational quote prints in a clean minimalist typography style. Black, white, beige, and grey palette with serif and sans-serif font pairings. Centre-aligned layouts ready to print in A4, A3, and 4:5 ratio. Instant digital download.",
      tags: "quote print, inspirational poster, typography wall art, minimalist quote print, motivational print, printable wall art, digital download, modern home decor, black and white print, gallery wall, quote poster, instant download, beige wall art",
    },
    tiktok: {
      caption: "Short words. Big wall statement. These quote prints hit different when they're framed.",
      hashtags: "#quoteprint #typographyart #wallartprint #motivationalprint #minimalistdecor #printablewallart #digitaldownload #etsyseller #gallerywallinspo #homedecortok",
    },
    instagram: {
      caption: "Eight quotes. Clean fonts. Neutral tones. The kind of wall art that makes a room feel intentional without trying too hard.",
      hashtags: "#quoteprint #inspirationalposter #minimalistwalldecor #typographyprint #printablewallart #gallerywallinspo #digitaldownload #etsyfinds #modernhomedecor #motivationalprint #blackandwhiteprint #wallartprint",
    },
    pinterest: {
      title: "Minimalist Inspirational Quote Poster Set of 8 – Typography Printable Wall Art",
      description: "Eight short inspirational quote prints in a clean modern typography style. Neutral palette, serif and sans-serif pairings. A4, A3, and 4:5 instant download.",
      keywords: "quote print, inspirational poster, typography wall art, minimalist print, motivational art, printable wall art, gallery wall, digital download",
    },
    gptImagePrompt: "set of three framed quote prints in thin black frames on a warm white wall above a minimalist desk beige tones soft natural light modern Scandinavian home office",
    videoPrompt: "Hook: plain wall, nothing on it. Reveal quote prints being hung one by one. Close up of clean serif typography. Final wide shot of styled space. CTA: download all 8.",
  },
  "art-003": {
    etsy: {
      title: "Nursery Wall Art Printable Set of 6 – Kids Room Prints, Alphabet, Animals, Positive Phrases",
      description: "A calming 6-piece nursery wall art set including an alphabet print, animal-themed print, and 4 positive phrase prints. Soft sage, blush, cream, and dusty blue palette with rounded child-friendly fonts. Instant digital download in A4 and A3.",
      tags: "nursery wall art, kids room print, alphabet print, nursery printable, children's wall art, baby room decor, animal print nursery, positive phrase print, digital download, instant download, pastel nursery art, playroom decor, gender neutral nursery",
    },
    tiktok: {
      caption: "The sweetest nursery gallery wall and it took 10 minutes to put together.",
      hashtags: "#nurserywalldecor #kidsroomdecor #nurseryprintable #babyroom #gallerywall #alphabetprint #digitaldownload #etsyseller #nurserydecortok #newbaby",
    },
    instagram: {
      caption: "Soft colours. Kind words. A little alphabet for curious minds. This 6-print nursery set is the easiest gallery wall you'll ever put together.",
      hashtags: "#nurserywallart #kidsroomprint #nurseryprintable #alphabetprint #babyroomdecor #gallerywallinspo #digitaldownload #etsyfinds #genderneutralnursery #playroomdecor #pastelart #childrenswallart",
    },
    pinterest: {
      title: "Nursery Wall Art Printable Set of 6 – Alphabet, Animals & Positive Phrase Prints for Kids Room",
      description: "Soft pastel nursery prints including alphabet, animal theme, and positive phrases. Sage, blush, cream, and dusty blue. A4 and A3 instant download.",
      keywords: "nursery wall art, kids room print, alphabet print, nursery printable, baby room decor, pastel nursery, positive phrase print, digital download",
    },
    gptImagePrompt: "six pastel nursery prints framed in natural wood frames arranged as gallery wall in a soft white nursery room sage blush cream tones warm natural light cot in background",
    videoPrompt: "Hook: empty nursery wall. Lay prints out on floor to plan arrangement. Show framing and hanging one by one. Final wide shot of complete cosy nursery. CTA: download the set.",
  },
  "art-004": {
    etsy: {
      title: "Zodiac Wall Art Printable Set of 12 – Minimalist Astrology Prints, Constellation Art, Gold Accent",
      description: "A complete set of 12 minimalist zodiac sign prints, each featuring the symbol, constellation, name, and dates. Black, white, and subtle gold palette. Perfect for astrology lovers and as personalised gifts. Instant digital download in A4 at 300 DPI.",
      tags: "zodiac print, astrology wall art, constellation print, star sign art, zodiac printable, astrology gift, minimalist zodiac, horoscope print, digital download, instant download, gold wall art, celestial print, zodiac decor",
    },
    tiktok: {
      caption: "Got your star sign on your wall yet? This zodiac set is giving celestial chic.",
      hashtags: "#zodiacprint #astrologylovers #constellationart #starsignprint #celestialart #wallartprint #digitaldownload #etsyseller #zodiacdecor #astrologytok",
    },
    instagram: {
      caption: "Your star sign, but make it art. All 12 zodiac signs in a minimal gold-accent design that actually looks good on a wall.",
      hashtags: "#zodiacprint #astrologyart #constellationprint #starsignart #celestialwallart #digitaldownload #etsyfinds #minimalistprint #goldaccentart #zodiacdecor #astrologygift #printablewallart",
    },
    pinterest: {
      title: "Minimalist Zodiac Wall Art Printable Set of 12 – Astrology Constellation Prints with Gold Accent",
      description: "Complete set of 12 zodiac sign prints with symbol, constellation, name, and dates. Black, white, and gold. A4 instant download. Perfect astrology gift.",
      keywords: "zodiac print, astrology wall art, constellation print, star sign art, zodiac gift, minimalist astrology, gold wall art, celestial print, digital download",
    },
    gptImagePrompt: "three zodiac constellation prints framed in thin gold frames on a deep navy wall celestial aesthetic gold accent art soft moody lighting minimal styling",
    videoPrompt: "Hook: which star sign are you? Flash through all 12 zodiac prints quickly. Slow down on viewer's sign. Show framed on a wall. CTA: get your sign as a print.",
  },
  "art-005": {
    etsy: {
      title: "Kitchen Wall Art Printable Set of 6 – Farmhouse Phrase Prints, Modern Kitchen Decor",
      description: "A set of 6 modern farmhouse kitchen phrase prints in cream, black, and warm brown. Script and sans-serif font combinations with clear text hierarchy. Perfect for kitchen walls, dining rooms, and gifting. Instant digital download in A4 and A3.",
      tags: "kitchen wall art, farmhouse print, kitchen printable, kitchen decor, phrase print, digital download, instant download, farmhouse decor, kitchen phrase, black and white kitchen art, modern farmhouse, dining room print, housewarming gift",
    },
    tiktok: {
      caption: "Your kitchen wall was asking for this. Farmhouse vibes, zero effort.",
      hashtags: "#kitchendecor #farmhouseprint #kitchenwallart #printablewallart #digitaldownload #etsyseller #homedecortok #modernfarmhouse #diningroom #kitchenphraseprint",
    },
    instagram: {
      caption: "Six kitchen phrases that actually make you smile every morning. Warm, simple, and very easy to print and frame.",
      hashtags: "#kitchenwallart #farmhouseprint #kitchenprintable #modernfarmhouse #diningwallart #digitaldownload #etsyfinds #homedecor #phraseprint #kitchendecor #printablewallart #housewarmingidea",
    },
    pinterest: {
      title: "Modern Farmhouse Kitchen Wall Art Printable Set of 6 – Phrase Prints for Kitchen Decor",
      description: "Set of 6 kitchen-themed phrase prints in warm farmhouse style. Cream, black, and brown palette. Script and sans-serif fonts. A4 and A3 instant download.",
      keywords: "kitchen wall art, farmhouse print, kitchen printable, phrase print, modern farmhouse, kitchen decor, dining room art, digital download",
    },
    gptImagePrompt: "three framed farmhouse kitchen phrase prints on a warm cream shiplap wall beside open shelves with neutral ceramic jars natural wood tones warm lifestyle photography",
    videoPrompt: "Hook: boring kitchen wall. Reveal phrase prints one by one being hung. Wide shot of styled warm farmhouse kitchen. CTA: download and print today.",
  },
  "art-006": {
    etsy: {
      title: "Personalised Name Print Template – Editable Canva Wall Art, 3 Layout Variations, Elegant Minimalist",
      description: "An elegant minimalist personalised name print template with 3 layout variations. Large name typography as the centrepiece with subtitle text below. Fully editable in Canva. Instant digital download in A4 vertical and horizontal formats. Perfect as a custom gift.",
      tags: "personalised name print, custom name wall art, editable name template, Canva template, name print, custom wall art, digital download, instant download, personalised gift, nursery name print, minimalist name art, custom print, name poster",
    },
    tiktok: {
      caption: "Type a name. Print it. Frame it. Best personalised gift and it takes 2 minutes.",
      hashtags: "#personalisedprint #customnameprint #canvatemplate #digitaldownload #etsyseller #gifttok #nameprint #customwallart #printablegift #homedecortok",
    },
    instagram: {
      caption: "The easiest personalised gift you'll ever give. Edit the name, download, print, frame. Three layouts to choose from so it fits any space.",
      hashtags: "#personalisedwallart #customnameprint #canvatemplate #nameprint #digitaldownload #etsyfinds #personalisedgift #minimalistwallart #customprintable #nameposter #editabletemplate #printablegift",
    },
    pinterest: {
      title: "Personalised Name Print Template – 3 Editable Canva Layouts, Minimalist Custom Wall Art",
      description: "Editable minimalist name print template with 3 layout variations. Large name typography with subtitle. Canva-ready. A4 vertical and horizontal instant download.",
      keywords: "personalised name print, custom name wall art, editable Canva template, name poster, custom gift, minimalist name art, digital download",
    },
    gptImagePrompt: "personalised name print in thin black frame on white nursery wall next to soft lamp warm neutral tones elegant minimalist large serif font name centred",
    videoPrompt: "Hook: searching for a unique gift. Open Canva template. Type in a name. Show it change live. Print and frame reveal. CTA: download the template now.",
  },
  "art-007": {
    etsy: {
      title: "Seasonal Wall Art Printable Bundle Set of 8 – Spring Summer Autumn Winter Prints, Soft Aesthetic",
      description: "An 8-piece seasonal wall art bundle with 2 prints per season. Each season has its own distinct colour palette and themed phrases for a soft, intentional aesthetic. Instant digital download in A4. Perfect for refreshing your walls throughout the year.",
      tags: "seasonal wall art, seasonal printable, spring print, summer print, autumn print, winter print, seasonal decor, printable wall art, digital download, instant download, seasonal bundle, home decor print, gallery wall seasonal",
    },
    tiktok: {
      caption: "Swap your wall art every season. This bundle has all four covered.",
      hashtags: "#seasonaldecor #wallartprint #springprint #autumnprint #printablewallart #digitaldownload #etsyseller #homedecortok #seasonalinspo #gallerywallinspo",
    },
    instagram: {
      caption: "Four seasons. Eight prints. One bundle to refresh your walls all year long. Soft, calm, and completely printable.",
      hashtags: "#seasonalwallart #seasonalprintable #springdecor #autumndecor #winterprint #summerdecor #printablewallart #digitaldownload #etsyfinds #gallerywallinspo #seasonalhome #softaesthetic",
    },
    pinterest: {
      title: "Seasonal Wall Art Printable Bundle – 8 Prints for Spring Summer Autumn Winter Home Decor",
      description: "8-piece seasonal printable bundle, 2 prints per season with defined colour palettes and themed phrases. A4 instant download. Refresh your walls all year.",
      keywords: "seasonal wall art, seasonal printable, spring print, summer print, autumn print, winter print, seasonal home decor, gallery wall, digital download",
    },
    gptImagePrompt: "four framed seasonal prints arranged in a 2x2 grid on a warm white wall each print in a distinct seasonal palette spring blossom summer breeze autumn leaves winter frost minimal styling natural light",
    videoPrompt: "Hook: time to change up your walls. Show each season's prints being swapped in and out of frames. CTA: get all 4 seasons in one bundle.",
  },
  "art-008": {
    etsy: {
      title: "Abstract Geometric Wall Art Printable Set of 6 – Modern Art Print, Terracotta Olive Boho Decor",
      description: "A set of 6 abstract geometric compositions using circles, arches, and rectangles in terracotta, beige, black, and olive. A modern art print set that adds warmth and depth to any room. Instant digital download in A4 and A3 at 300 DPI.",
      tags: "abstract geometric print, geometric wall art, terracotta print, modern art print, boho wall art, abstract printable, digital download, instant download, gallery wall, olive green art, arch print, circle art, contemporary wall decor",
    },
    tiktok: {
      caption: "Terracotta and olive abstract prints — this is the aesthetic your living room needs.",
      hashtags: "#abstractart #geometricprint #terracottadecor #bohowallart #modernart #printablewallart #digitaldownload #etsyseller #homedecortok #gallerywallinspo",
    },
    instagram: {
      caption: "Warm tones. Geometric shapes. Six prints that work individually or together as a gallery wall. This is the abstract art set your space has been waiting for.",
      hashtags: "#abstractgeometricart #terracottaprint #olivedecor #modernwallart #bohowallart #digitaldownload #etsyfinds #gallerywallinspo #geometricprint #abstractprintable #archprint #contemporarydecor",
    },
    pinterest: {
      title: "Abstract Geometric Wall Art Printable Set of 6 – Terracotta Olive Modern Art Print",
      description: "Six geometric abstract compositions in terracotta, beige, black, and olive. Circles, arches, and layered shapes. A4 and A3 instant download for modern and boho interiors.",
      keywords: "abstract geometric print, terracotta wall art, olive green print, modern art printable, boho decor, arch print, circle art, geometric wall art, digital download",
    },
    gptImagePrompt: "set of three abstract geometric prints in terracotta beige and olive framed in natural wood frames on a warm white limewash wall rattan chair in corner warm afternoon light boho modern interior",
    videoPrompt: "Hook: your walls are too plain. Reveal geometric prints being placed on a warm textured wall. Zoom into shapes and colour palette. CTA: download the set today.",
  },
  "art-009": {
    etsy: {
      title: "Vintage Botanical Print Set of 6 – Printable Plant Wall Art, Fern Eucalyptus Wildflower, Antique Style",
      description: "A set of 6 vintage botanical illustration prints featuring fern, eucalyptus, wildflowers, and more. Muted green, sepia, and cream palette with an aged paper texture for an authentic antique feel. Instant digital download in A4 at 300 DPI.",
      tags: "botanical print, vintage botanical art, plant wall art, fern print, eucalyptus print, wildflower print, antique botanical, printable wall art, digital download, instant download, nature print, green wall art, vintage home decor",
    },
    tiktok: {
      caption: "Vintage botanical prints that look like they came from an old library. Download and frame.",
      hashtags: "#botanicalprint #vintageart #plantprint #fernprint #eucalyptusprint #printablewallart #digitaldownload #etsyseller #naturaldecor #homedecortok",
    },
    instagram: {
      caption: "Six botanical illustrations with that old-world charm. Fern, eucalyptus, wildflowers — printed and framed, they look like they've been in the family for years.",
      hashtags: "#botanicalprint #vintagebotanical #plantwalldecor #fernprint #eucalyptusart #wildflowerprint #digitaldownload #etsyfinds #naturewallart #antiquebotanical #printablewallart #vintagedecor",
    },
    pinterest: {
      title: "Vintage Botanical Printable Set of 6 – Fern Eucalyptus Wildflower Antique Plant Wall Art",
      description: "Six vintage botanical illustration prints in muted green, sepia, and cream. Aged paper texture effect. A4 instant digital download. Perfect for traditional and cottagecore interiors.",
      keywords: "vintage botanical print, plant wall art, fern print, eucalyptus print, wildflower print, antique botanical, nature print, printable wall art, digital download",
    },
    gptImagePrompt: "six vintage botanical prints in aged cream mounts framed in thin gold frames arranged on a warm white wall beside dark wood bookshelf library aesthetic warm tones natural light",
    videoPrompt: "Hook: your walls need some old-world charm. Show each botanical print close up one by one. Reveal full gallery wall arrangement. CTA: download the full set.",
  },
  "art-010": {
    etsy: {
      title: "City Skyline Printable Set of 6 – Minimalist Wall Art London Paris New York Tokyo Sydney Dubai",
      description: "A set of 6 minimalist city skyline silhouette prints: London, Paris, New York, Tokyo, Sydney, and Dubai. Black on white horizontal compositions with city name typography. Perfect for travel lovers, offices, and modern homes. Instant digital download in A4 horizontal at 300 DPI.",
      tags: "city skyline print, London print, Paris print, New York print, Tokyo print, Sydney print, Dubai print, skyline wall art, travel art print, minimalist city art, printable wall art, digital download, instant download",
    },
    tiktok: {
      caption: "Your favourite city on your wall. Which one would you pick?",
      hashtags: "#cityskylineprint #travelwallart #londonprint #newyorkprint #parisprint #minimalistprint #digitaldownload #etsyseller #traveldecor #homedecortok",
    },
    instagram: {
      caption: "Six cities. One clean minimalist style. Whether it's where you live, where you've been, or where you're going — these skyline prints make great wall art.",
      hashtags: "#cityskylineprint #minimalisttravelart #londonprint #parisprint #newyorkprint #tokyoprint #sydneyprint #dubaiprint #digitaldownload #etsyfinds #travelwallart #printablewallart",
    },
    pinterest: {
      title: "Minimalist City Skyline Printable Set of 6 – London Paris New York Tokyo Sydney Dubai Wall Art",
      description: "Six minimalist black on white city skyline prints with city name typography. London, Paris, New York, Tokyo, Sydney, Dubai. A4 horizontal instant download.",
      keywords: "city skyline print, London print, Paris print, New York skyline, minimalist city art, travel wall art, printable wall art, digital download",
    },
    gptImagePrompt: "three city skyline prints in thin black frames arranged horizontally on a white wall in a modern home office minimal black and white styling clean desk below",
    videoPrompt: "Hook: for everyone who loves to travel. Flash through all 6 city skylines one by one. Show framed in a stylish home. CTA: pick your city and download.",
  },
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
