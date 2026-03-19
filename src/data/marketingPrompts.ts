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
  "social-001": {
    etsy: {
      title: "Instagram Post & Story Templates – 30 Canva Templates for Small Business, Editable Feed & Stories",
      description: "A set of 30 editable Canva Instagram templates for small businesses: 20 feed post layouts and 10 story formats. Cohesive brand aesthetic with fully editable text, colours, and fonts. Includes a how-to-edit guide. Instant digital download.",
      tags: "Instagram template, Canva Instagram template, social media template, small business template, Instagram post template, story template, editable Instagram, Canva template, digital download, instant download, Instagram feed template, branding template, social media kit",
    },
    tiktok: {
      caption: "Stop spending hours on Instagram content. These Canva templates do the heavy lifting for you.",
      hashtags: "#instagramtemplates #canvatemplate #smallbusinessowner #socialmediatips #contentcreator #instagramfeed #digitaldownload #etsyseller #contentcreation #businesstok",
    },
    instagram: {
      caption: "30 done-for-you Instagram templates. Feed posts and stories. All editable in Canva. Your brand, your colours, 10 minutes to set up.",
      hashtags: "#instagramtemplates #canvatemplate #smallbusinesstips #socialmediamarketing #instagramfeed #storiestemplate #digitaldownload #etsyfinds #contentcreator #brandingtemplate #businessowner #socialmediakit",
    },
    pinterest: {
      title: "Instagram Post & Story Canva Templates for Small Business – 30 Editable Feed & Stories Designs",
      description: "30 editable Canva templates for Instagram. 20 feed posts and 10 story formats. Cohesive brand aesthetic, fully editable. Includes how-to-edit guide. Instant download.",
      keywords: "Instagram template, Canva Instagram template, social media template, small business template, story template, editable Instagram, branding template, digital download",
    },
    gptImagePrompt: "flat lay phone screen mockup showing 9-grid Instagram feed with cohesive branded post templates minimal neutral palette clean desk background natural light small business aesthetic",
    videoPrompt: "Hook: your Instagram feed looks all over the place. Open Canva template. Swap in brand colours and logo in seconds. Reveal polished cohesive feed. CTA: download the full set.",
  },
  "social-002": {
    etsy: {
      title: "Pinterest Pin Templates – 20 Editable Canva Designs, Vertical Pin & Idea Pin Layouts for Bloggers",
      description: "A set of 20 editable Canva Pinterest pin templates in the standard 1000x1500px format. Includes text-overlay layouts, image placeholder designs, and idea pin formats. All fonts and colours are easily editable. Includes a Pinterest best practices guide. Instant download.",
      tags: "Pinterest template, Pinterest pin template, Canva Pinterest template, blogger template, social media template, Pinterest marketing, editable pin template, digital download, instant download, idea pin template, Pinterest design, vertical pin template, content creator template",
    },
    tiktok: {
      caption: "Pinterest traffic starts with a click-worthy pin. These templates are designed to stop the scroll.",
      hashtags: "#pinteresttemplate #canvatemplate #pinterestmarketing #bloggertools #socialmediatips #digitaldownload #etsyseller #contentcreator #pinterestgrowth #creativebusiness",
    },
    instagram: {
      caption: "20 Pinterest pin templates that are actually designed to get clicks. Bold layouts, easy to edit, and built to drive traffic.",
      hashtags: "#pinteresttemplate #canvapinterest #pinterestmarketing #bloggertemplate #socialmediadesign #digitaldownload #etsyfinds #contentcreator #pinterestgrowth #ideapintemplate #verticalpindesign #pinteresttips",
    },
    pinterest: {
      title: "Pinterest Pin Canva Templates – 20 Editable Vertical Pins for Bloggers and Content Creators",
      description: "20 editable Canva Pinterest pin templates at 1000x1500px. Text-overlay layouts, image placeholders, idea pin formats. Includes Pinterest best practices guide. Instant download.",
      keywords: "Pinterest pin template, Canva Pinterest template, vertical pin design, blogger template, idea pin template, Pinterest marketing, editable pin, digital download",
    },
    gptImagePrompt: "tablet screen showing Pinterest board with multiple click-worthy branded pin designs bold typography lifestyle photography overlaid text minimal clean aesthetic content creator workspace",
    videoPrompt: "Hook: no one is clicking your Pinterest pins. Swap in one of these templates. Change the text. Export. Show before and after pin designs. CTA: download 20 templates today.",
  },
  "social-003": {
    etsy: {
      title: "Instagram Highlight Cover Icons Set of 30 – Editable Canva Icons, Multiple Aesthetic Styles",
      description: "A set of 30 Instagram story highlight cover icons across multiple aesthetic styles: minimal, boho, dark, and pastel. Covers all common highlight categories. Multiple colour palette options included. Exported at correct Instagram dimensions with installation instructions. Instant digital download.",
      tags: "Instagram highlight covers, highlight icons, Instagram highlight template, Canva highlight covers, story highlight icons, editable highlight covers, Instagram icons, digital download, instant download, boho highlight covers, minimal highlight icons, pastel highlight covers, Instagram aesthetic",
    },
    tiktok: {
      caption: "Your Instagram profile deserves matching highlight covers. Grab and install in 5 minutes.",
      hashtags: "#instagramhighlightcovers #instagramaesthetic #highlighticons #canvatemplate #digitaldownload #etsyseller #instagramtips #profilesetup #contentcreator #smallbusiness",
    },
    instagram: {
      caption: "30 Instagram highlight cover icons across 4 aesthetic styles. Minimal, boho, dark, pastel — pick your vibe and install in minutes.",
      hashtags: "#instagramhighlightcovers #highlighticons #instagramaesthetic #canvatemplate #profilesetup #digitaldownload #etsyfinds #instagramtips #bohostyle #minimalaesthetic #darkstyle #pastelicons",
    },
    pinterest: {
      title: "Instagram Highlight Cover Icons Set of 30 – Minimal Boho Dark Pastel Editable Canva Templates",
      description: "30 highlight cover icons in 4 aesthetic styles: minimal, boho, dark, and pastel. Covers all common categories. Correct Instagram dimensions. Installation guide included. Instant download.",
      keywords: "Instagram highlight covers, highlight icons, Canva highlight template, Instagram aesthetic, story highlight icons, minimal icons, boho highlight, pastel icons, digital download",
    },
    gptImagePrompt: "phone screen showing stylish Instagram profile with matching highlight cover icons in minimal beige aesthetic clean white background profile grid visible lifestyle photography",
    videoPrompt: "Hook: your Instagram profile looks unfinished without matching highlight covers. Show 4 styles side by side. Pick one. Install on phone in seconds. CTA: download all 30 icons.",
  },
  "social-004": {
    etsy: {
      title: "YouTube Thumbnail Templates – 20 Editable Canva Designs, Bold High Click-Through Rate Thumbnails",
      description: "A set of 20 YouTube thumbnail Canva templates at 1280x720px. Bold readable text areas, high-contrast designs, and face cutout placeholders built for high click-through rates. All text and colours are fully editable. Instant digital download.",
      tags: "YouTube thumbnail template, Canva YouTube template, thumbnail design, editable thumbnail, YouTube template, click-through rate thumbnail, bold thumbnail template, digital download, instant download, YouTuber template, video thumbnail, social media template, content creator",
    },
    tiktok: {
      caption: "Your YouTube thumbnail is the first thing people see. Make it impossible to scroll past.",
      hashtags: "#youtubethumbnail #canvatemplate #youtubetemplate #contentcreator #youtubergrowth #digitaldownload #etsyseller #youtubestrategy #videocreator #socialmediatips",
    },
    instagram: {
      caption: "20 YouTube thumbnail templates designed to get clicked. Bold, high contrast, face-ready. All editable in Canva.",
      hashtags: "#youtubethumbnail #thumbnaildesign #canvayoutube #youtubetemplate #contentcreator #clickthroughrate #digitaldownload #etsyfinds #youtubergrowth #boldthumbnail #videomarketing #socialmediadesign",
    },
    pinterest: {
      title: "YouTube Thumbnail Canva Templates – 20 Bold Editable Designs for High Click-Through Rates",
      description: "20 editable Canva YouTube thumbnail templates at 1280x720px. Bold text, high-contrast layouts, face cutout placeholders. Fully editable text and colours. Instant download.",
      keywords: "YouTube thumbnail template, Canva thumbnail, bold thumbnail design, editable YouTube template, click-through rate, video thumbnail, content creator template, digital download",
    },
    gptImagePrompt: "laptop screen showing YouTube channel page with bold vibrant thumbnail templates displayed in grid view bright colours strong text contrast creator content dark background",
    videoPrompt: "Hook: low click-through rate? Your thumbnail is the problem. Open template. Add photo and title. Publish. Show before thumbnail vs the new one side by side. CTA: download 20 templates.",
  },
  "social-005": {
    etsy: {
      title: "TikTok Carousel Templates – 15 Editable Canva Swipe Posts, Tips, Storytelling & Educational Layouts",
      description: "A set of 15 TikTok carousel (photo mode) Canva template sets. Each set includes a cover slide plus content slides in educational, tips, and storytelling layouts. Optimised for TikTok dimensions with fully editable text and colours. Includes phone screen mockups. Instant download.",
      tags: "TikTok carousel template, TikTok template, Canva TikTok template, swipe post template, photo carousel TikTok, editable TikTok template, educational content template, digital download, instant download, TikTok content creator, storytelling template, social media template",
    },
    tiktok: {
      caption: "Carousels are blowing up on TikTok right now. These templates make it stupidly easy to post them.",
      hashtags: "#tiktokcarousel #tiktoktemplate #canvatemplate #contentcreator #tiktoktips #socialmediamarketing #digitaldownload #etsyseller #tiktokgrowth #contentcreation",
    },
    instagram: {
      caption: "15 TikTok carousel template sets ready to go in Canva. Educational, tips, storytelling — all the formats that actually perform.",
      hashtags: "#tiktokcarousel #tiktoktemplate #canvatemplate #contentcreator #tiktokgrowth #swipepost #digitaldownload #etsyfinds #socialmediamarketing #tiktokstrategy #educationalcontent #carouseltemplate",
    },
    pinterest: {
      title: "TikTok Carousel Canva Templates – 15 Swipe Post Sets for Educational, Tips & Storytelling Content",
      description: "15 TikTok carousel template sets in Canva. Cover and content slides for tips, education, and storytelling. TikTok dimensions, fully editable. Phone mockups included. Instant download.",
      keywords: "TikTok carousel template, Canva TikTok template, swipe post template, photo carousel TikTok, educational content, storytelling template, content creator, digital download",
    },
    gptImagePrompt: "phone screen showing TikTok photo carousel swipe post template with bold clean typography pastel accent colours multiple slide preview content creator aesthetic bright studio background",
    videoPrompt: "Hook: TikTok carousels are the most saved content right now. Open template in Canva. Add your tips text. Export. Show it live in TikTok app. CTA: download 15 carousel sets.",
  },
  "social-006": {
    etsy: {
      title: "LinkedIn Post & Banner Templates – 20 Professional Canva Designs, Posts, Carousels & Profile Banners",
      description: "A set of 20 professional Canva LinkedIn templates: post templates, carousel slide layouts, and profile banner designs. Clean and polished aesthetic with brand colour customisation. Mockups showing templates in LinkedIn feed included. Instant digital download.",
      tags: "LinkedIn template, LinkedIn post template, LinkedIn banner template, professional social media template, Canva LinkedIn template, LinkedIn carousel, profile banner template, editable LinkedIn template, digital download, instant download, personal brand, business template",
    },
    tiktok: {
      caption: "Your LinkedIn profile can look this polished in under 10 minutes. Canva templates.",
      hashtags: "#linkedintemplate #linkedintips #personalbranding #canvatemplate #professionaldevelopment #digitaldownload #etsyseller #linkedingrowth #contentcreator #businesstok",
    },
    instagram: {
      caption: "LinkedIn posts that look this professional don't happen by accident. They happen with a template. 20 designs, all in Canva.",
      hashtags: "#linkedintemplate #linkedinmarketing #professionalbranding #canvatemplate #linkedinpost #carouseltemplate #profilebanner #digitaldownload #etsyfinds #personalbranding #businesscontent #linkedingrowth",
    },
    pinterest: {
      title: "Professional LinkedIn Canva Templates – 20 Post, Carousel & Banner Designs for Personal Branding",
      description: "20 professional LinkedIn Canva templates: posts, carousel slides, and profile banners. Clean aesthetic, editable brand colours. LinkedIn feed mockups included. Instant download.",
      keywords: "LinkedIn template, LinkedIn post template, profile banner, LinkedIn carousel, professional social media, Canva LinkedIn, personal brand, editable template, digital download",
    },
    gptImagePrompt: "laptop screen showing polished LinkedIn profile page with professional branded banner and post templates in feed clean navy and white aesthetic minimal professional workspace",
    videoPrompt: "Hook: your LinkedIn looks like it hasn't been touched in years. Open template. Brand it in 5 minutes. Show polished profile and post live. CTA: download 20 LinkedIn templates.",
  },
  "social-007": {
    etsy: {
      title: "Facebook Group Banner Templates – 10 Editable Canva Cover Photo Designs, Professional Group Branding",
      description: "A set of 10 editable Canva Facebook group and page cover photo templates. Professional branding layouts with fully editable text, colours, and logo placeholders. Includes sizing guide for correct display on both mobile and desktop. Instant digital download.",
      tags: "Facebook banner template, Facebook group cover, Facebook cover photo template, Canva Facebook template, editable Facebook banner, group branding template, Facebook page banner, digital download, instant download, social media template, Facebook cover design, business branding",
    },
    tiktok: {
      caption: "A well-branded Facebook group cover makes your community look 10x more professional.",
      hashtags: "#facebooktemplate #facebookgroupcover #canvatemplate #facebookbanner #communitybuilding #digitaldownload #etsyseller #socialmediadesign #groupadmin #onlinecommunity",
    },
    instagram: {
      caption: "Your Facebook group deserves a cover that makes people want to join. 10 editable Canva templates, done in minutes.",
      hashtags: "#facebookbanner #facebookgroupcover #canvatemplate #facebookpagetemplate #groupbranding #digitaldownload #etsyfinds #socialmediadesign #coverphototemplate #facebookmarketing #communitybuilding #brandedtemplate",
    },
    pinterest: {
      title: "Facebook Group Cover Photo Canva Templates – 10 Editable Professional Banner Designs",
      description: "10 editable Canva Facebook group and page cover templates. Professional layouts with editable text, colours, and logo placeholders. Mobile and desktop sizing guide. Instant download.",
      keywords: "Facebook banner template, Facebook group cover, Canva Facebook template, cover photo template, editable banner, group branding, business Facebook, digital download",
    },
    gptImagePrompt: "desktop browser showing styled Facebook group page with bold professional branded cover photo banner mockup clean modern design colourful but minimal text overlay",
    videoPrompt: "Hook: your Facebook group cover looks outdated. Open Canva template. Add group name. Brand colours in. Show it live on Facebook. CTA: download 10 templates.",
  },
  "social-008": {
    etsy: {
      title: "Podcast Cover Art Templates – 12 Professional Canva Designs, Apple Podcasts & Spotify Spec Ready",
      description: "A set of 12 professional podcast cover art Canva templates at 3000x3000px, meeting Apple Podcasts and Spotify specifications. Bold readable text at thumbnail size, editable photo placeholders, and fully customisable colours. Includes a podcast spec requirements guide. Instant download.",
      tags: "podcast cover art, podcast template, Canva podcast cover, podcast artwork, Apple Podcasts template, Spotify podcast art, editable podcast cover, digital download, instant download, podcaster template, podcast branding, podcast design, podcast art template",
    },
    tiktok: {
      caption: "Your podcast cover art is your first impression. Make it a good one.",
      hashtags: "#podcastcover #podcastart #canvatemplate #podcaster #podcasttips #digitaldownload #etsyseller #podcastbranding #newpodcast #audiocontent",
    },
    instagram: {
      caption: "12 podcast cover art templates built to spec for Apple Podcasts and Spotify. Bold, readable, professional. All editable in Canva.",
      hashtags: "#podcastcoverart #podcasttemplate #canvapodcast #podcastbranding #applepodcasts #spotifypodcast #digitaldownload #etsyfinds #podcasterlife #newpodcast #podcastdesign #audiocreator",
    },
    pinterest: {
      title: "Professional Podcast Cover Art Canva Templates – 12 Designs, Apple Podcasts & Spotify Spec Ready",
      description: "12 podcast cover art Canva templates at 3000x3000px. Bold readable text, editable photo and colour options. Apple Podcasts and Spotify spec guide included. Instant download.",
      keywords: "podcast cover art, podcast template, Canva podcast, Apple Podcasts artwork, Spotify podcast art, editable podcast cover, podcast branding, digital download",
    },
    gptImagePrompt: "phone screen showing podcast app with bold professional podcast cover art mockup bold typography strong contrast lifestyle photography host photo visible multiple template styles shown",
    videoPrompt: "Hook: no one will click a boring podcast cover. Open template. Add show name and photo. Export at 3000px. Show it in Apple Podcasts and Spotify. CTA: download 12 covers.",
  },
  "social-009": {
    etsy: {
      title: "Email Newsletter Header Templates – 15 Editable Canva Designs, Seasonal & Evergreen Banners",
      description: "A set of 15 email newsletter header and banner Canva templates at standard email widths. Includes both seasonal and evergreen options compatible with Mailchimp, Klaviyo, and ConvertKit. Fully editable text, colours, and logo placeholders. Instant digital download.",
      tags: "email newsletter template, email header template, Canva email template, newsletter banner, email marketing template, Mailchimp template, Klaviyo template, digital download, instant download, email banner design, newsletter design, email marketing, seasonal email template",
    },
    tiktok: {
      caption: "A professional email header makes your newsletter feel like a real brand. Here's how.",
      hashtags: "#emailmarketing #emailtemplate #canvatemplate #newsletterdesign #emailnewsletter #digitaldownload #etsyseller #emailmarketingtips #mailchimp #contentcreator",
    },
    instagram: {
      caption: "15 email newsletter header templates that make your emails look like a real brand sent them. Seasonal and evergreen options in Canva.",
      hashtags: "#emailnewsletter #emailheadertemplate #canvatemplate #emailmarketing #newsletterdesign #mailchimptemplate #klaviyo #digitaldownload #etsyfinds #emailmarketingtips #seasonalemail #brandednewsletter",
    },
    pinterest: {
      title: "Email Newsletter Header Canva Templates – 15 Seasonal & Evergreen Banner Designs for Mailchimp Klaviyo",
      description: "15 email newsletter header templates in Canva at standard email widths. Seasonal and evergreen options. Compatible with Mailchimp, Klaviyo, and ConvertKit. Instant download.",
      keywords: "email newsletter template, email header template, newsletter banner, Canva email template, Mailchimp template, Klaviyo, email marketing, seasonal banner, digital download",
    },
    gptImagePrompt: "laptop screen showing open email newsletter with polished branded header banner design clean modern layout branded colours professional email marketing aesthetic inbox view",
    videoPrompt: "Hook: plain email headers are killing your open rate. Open Canva template. Brand it in 2 minutes. Show final email in inbox. CTA: download 15 header templates.",
  },
  "social-010": {
    etsy: {
      title: "Canva Brand Kit Templates – Logo, Colour Palette, Font Pairing & Brand Guidelines, Complete Identity Kit",
      description: "An all-in-one Canva brand identity kit including editable logo templates, colour palette sheets, font pairing guides, social media sizing cheatsheet, and a one-page brand guidelines document. Perfect for small businesses and freelancers building a cohesive visual identity. Instant digital download.",
      tags: "brand kit, Canva brand kit, logo template, brand identity, colour palette template, font pairing, brand guidelines, small business branding, digital download, instant download, brand design, business branding template, visual identity, Canva template",
    },
    tiktok: {
      caption: "A brand kit is the thing that makes your business look like a real business. And you can build it in Canva.",
      hashtags: "#brandkit #canvatemplate #smallbusinessbranding #brandidentity #logotemplate #digitaldownload #etsyseller #branddesign #businesstok #visualidentity",
    },
    instagram: {
      caption: "Logo. Colours. Fonts. Brand guidelines. All in one Canva kit. Everything you need to make your business look intentional and professional.",
      hashtags: "#brandkit #brandidentity #canvatemplate #logotemplate #colourpalette #fontpairing #brandguidelines #digitaldownload #etsyfinds #smallbusinessbranding #visualidentity #branddesign",
    },
    pinterest: {
      title: "Complete Canva Brand Kit Templates – Logo, Colour Palette, Font Pairing & Brand Guidelines for Small Business",
      description: "All-in-one Canva brand identity kit: logo templates, colour palette sheets, font pairing guides, social media sizing cheatsheet, and one-page brand guidelines. Instant download.",
      keywords: "brand kit, Canva brand kit, logo template, brand identity, colour palette, font pairing, brand guidelines, small business branding, visual identity, digital download",
    },
    gptImagePrompt: "flat lay showing printed brand kit documents spread on a white desk logo mark colour swatches font specimens brand board style guide natural light minimal creative studio",
    videoPrompt: "Hook: your business has no visual identity. Open brand kit in Canva. Fill in logo, colours, fonts. Show the full brand board complete. CTA: build your brand with this kit.",
  },
  "biz-001": {
    etsy: {
      title: "Invoice Template Editable Receipt Template Canva Freelancer Invoice Small Business Invoice PDF",
      description: "Create professional invoices and receipts in minutes with these editable templates designed for freelancers and small businesses. Perfect for improving organisation, building trust with clients, and getting paid faster with clean, branded documents.",
      tags: "invoice template,receipt template,freelancer invoice,small business invoice,editable invoice,canva invoice,professional invoice,business templates,service invoice,payment receipt,branding template,invoice pdf,consultant invoice",
    },
    tiktok: {
      caption: "Still sending invoices that look rushed and unprofessional? This fixes it instantly.",
      hashtags: "#freelancerlife #smallbusinessuk #invoicing #businessowner #canvatemplates #sidehustle #entrepreneurlife #onlinebusiness #productivity #branding",
    },
    instagram: {
      caption: "Your invoice is part of your brand, not just a document. These templates help you look professional, stay organised and make getting paid feel seamless. Simple to customise and ready to use straight away.",
      hashtags: "#freelanceruk #smallbusinessowner #invoice #brandingdesign #canvatemplate #entrepreneuruk #businessgrowth #onlinebusinessuk #digitaldownloads #productivitytools #creativebusiness #businesstips",
    },
    pinterest: {
      title: "Editable Invoice and Receipt Template for Freelancers and Small Businesses",
      description: "Professional invoice and receipt templates to improve organisation and get paid faster. Ideal for freelancers and small businesses.",
      keywords: "invoice template,freelancer invoice,receipt template,small business tools,canva invoice,editable invoice,professional branding,business templates",
    },
    gptImagePrompt: "flat lay invoice and receipt templates printed on white paper neutral desk laptop coffee mug pen soft natural lighting minimalist business aesthetic beige tones",
    videoPrompt: "Hook: your invoices look unprofessional. Show messy invoice vs clean template. Demonstrate editing in Canva. CTA: upgrade your invoices and get paid faster.",
  },
  "biz-002": {
    etsy: {
      title: "Media Kit Template Influencer Canva Media Kit Brand Pitch Kit Creator Media Kit Editable PDF",
      description: "Impress brands with a polished, professional media kit designed for influencers and content creators. Showcase your audience, engagement and past collaborations with a clean, easy-to-edit Canva template.",
      tags: "media kit template,influencer media kit,creator media kit,brand pitch kit,canva media kit,blogger media kit,youtube media kit,instagram media kit,editable template,brand collaboration,content creator tools,press kit template,influencer tools",
    },
    tiktok: {
      caption: "Brands aren't replying to your emails? Your media kit might be the reason.",
      hashtags: "#contentcreator #influenceruk #branddeals #socialmediagrowth #canvatemplates #creatorbusiness #entrepreneurlife #onlineincome #digitalproducts #marketingtips",
    },
    instagram: {
      caption: "Your media kit is often your first impression with a brand. This template helps you present your value clearly, professionally and with confidence. Make it easier for brands to say yes.",
      hashtags: "#influenceruk #contentcreatorlife #brandcollaboration #mediakit #canvadesign #creatorbusiness #socialmediatips #personalbranding #digitaldownloads #onlinebusinessuk #creatorgrowth #marketingstrategy",
    },
    pinterest: {
      title: "Influencer Media Kit Template for Brand Collaborations",
      description: "Professional media kit template to showcase your audience and secure brand deals. Perfect for influencers and creators.",
      keywords: "media kit template,influencer media kit,brand pitch,creator tools,canva template,blogger media kit,content creator,brand partnerships",
    },
    gptImagePrompt: "flat lay influencer media kit pages on tablet and printed sheets neutral workspace coffee soft light modern minimal branding aesthetic",
    videoPrompt: "Hook: brands keep ignoring your pitches. Show media kit pages. Highlight stats and layout. CTA: upgrade your media kit and attract brands.",
  },
  "biz-003": {
    etsy: {
      title: "Business Card Template Editable Canva Modern Business Card Minimalist Professional Card Design",
      description: "Create a strong first impression with modern, editable business card templates designed for professionals. Clean layouts and easy customisation make it simple to build a polished brand identity.",
      tags: "business card template,editable business card,canva business card,modern business card,minimalist card,professional branding,real estate card,consultant card,stylist business card,networking card,brand identity,business design,printable card",
    },
    tiktok: {
      caption: "Your business card still looks outdated? You're losing opportunities.",
      hashtags: "#businesscards #brandinguk #smallbusinessuk #entrepreneurlife #canvadesign #networking #brandidentity #marketingtips #digitaldownloads #businessowner",
    },
    instagram: {
      caption: "A business card should feel like an extension of your brand. These templates make it easy to look modern, polished and professional without overcomplicating the process. Perfect for standing out in any industry.",
      hashtags: "#businessbranding #smallbusinessowner #canvatemplates #branddesign #entrepreneuruk #marketingstrategy #creativebusiness #professionalbranding #networkingtips #digitalproducts #brandidentitydesign #businessgrowth",
    },
    pinterest: {
      title: "Modern Business Card Template Editable in Canva",
      description: "Clean and professional business card templates for modern brands. Easy to customise and perfect for networking.",
      keywords: "business card template,modern business card,canva design,branding template,professional card,networking tools,small business branding,editable template",
    },
    gptImagePrompt: "stack of modern business cards on neutral desk soft shadows minimal typography clean branding beige and black tones professional aesthetic",
    videoPrompt: "Hook: your business card looks outdated. Show old vs modern design. Show editing process. CTA: upgrade your branding today.",
  },
  "biz-004": {
    etsy: {
      title: "Freelance Proposal Template Contract Template Canva Client Agreement Professional Business Documents",
      description: "Win more clients with professional proposal and contract templates designed for freelancers. Clearly present your services, pricing and terms while protecting your business and saving time.",
      tags: "proposal template,contract template,freelance contract,client agreement,business proposal,canva template,service agreement,freelancer tools,client contract,editable template,design proposal,photography contract,writer contract",
    },
    tiktok: {
      caption: "Your proposals aren't converting? This is probably why.",
      hashtags: "#freelancerlife #clientwork #businessowner #proposaldesign #canvatemplates #entrepreneurtips #onlinebusiness #servicebusiness #digitalproducts #freelancetips",
    },
    instagram: {
      caption: "A strong proposal can change how clients see your work instantly. These templates help you present your services clearly, set expectations and build trust from the start. Save time and close better projects.",
      hashtags: "#freelanceruk #proposaltemplate #clientmanagement #businessdocuments #canvadesign #servicebusiness #entrepreneuruk #onlinebusinessuk #creativefreelancer #digitaldownloads #businessgrowth #brandingtools",
    },
    pinterest: {
      title: "Freelance Proposal and Contract Template for Client Projects",
      description: "Professional proposal and contract templates to win clients and protect your business. Ideal for freelancers.",
      keywords: "proposal template,freelance contract,client agreement,business documents,canva template,freelancer tools,service contract,proposal design",
    },
    gptImagePrompt: "proposal and contract documents on desk laptop pen neutral tones clean layout professional business aesthetic",
    videoPrompt: "Hook: your proposals get ignored. Show messy vs clean proposal. Show template pages. CTA: improve your client conversion.",
  },
  "biz-005": {
    etsy: {
      title: "Client Onboarding Packet Template Welcome Guide Questionnaire Canva Editable Service Business Kit",
      description: "Create a seamless client experience with professional onboarding packet templates. Includes welcome guides, questionnaires and timelines to help you stay organised and impress clients from the start.",
      tags: "client onboarding,onboarding template,welcome packet,client questionnaire,business templates,canva template,service business,client experience,freelancer tools,branding kit,client workflow,editable template,virtual assistant tools",
    },
    tiktok: {
      caption: "Clients feel confused after booking? This is what's missing.",
      hashtags: "#clientexperience #smallbusinessuk #freelancerlife #businesssystems #canvatemplates #entrepreneurtips #servicebusiness #productivity #digitalproducts #onlinebusiness",
    },
    instagram: {
      caption: "How you onboard clients sets the tone for your entire service. These templates help you feel organised, professional and easy to work with from day one. Make your business feel effortless and premium.",
      hashtags: "#clientonboarding #businesssystems #servicebusinessuk #canvatemplate #entrepreneuruk #freelancerlife #onlinebusinessuk #workflowtools #digitaldownloads #businessgrowth #brandingtools #clientmanagement",
    },
    pinterest: {
      title: "Client Onboarding Packet Template for Service Businesses",
      description: "Professional onboarding templates to create a smooth client experience. Includes welcome guide and questionnaire.",
      keywords: "client onboarding,service business tools,canva template,client experience,business systems,freelancer tools,welcome packet,workflow templates",
    },
    gptImagePrompt: "client onboarding packet pages on desk laptop coffee neutral tones clean layout modern business aesthetic",
    videoPrompt: "Hook: clients feel lost after booking. Show onboarding pages. Highlight structure. CTA: improve your client experience.",
  },
  "biz-006": {
    etsy: {
      title: "Rate Card Template Pricing Guide Canva Editable Services Price List Freelancer Pricing Sheet",
      description: "Present your pricing clearly with professional rate card templates designed for freelancers and agencies. Showcase your services in a clean, organised format that builds trust and saves time.",
      tags: "rate card template,pricing guide,price list template,freelancer pricing,canva template,service pricing,agency pricing,editable template,business tools,photography pricing,design pricing,marketing services,consultant pricing",
    },
    tiktok: {
      caption: "Still explaining your prices over and over? You need this.",
      hashtags: "#freelancerpricing #businessowner #servicebusiness #canvatemplates #entrepreneurlife #pricingstrategy #onlinebusiness #digitalproducts #smallbusinessuk #marketingtips",
    },
    instagram: {
      caption: "Clear pricing makes everything easier for you and your clients. These templates help you present your services in a way that feels structured, professional and easy to understand. Save time and build trust instantly.",
      hashtags: "#pricingstrategy #freelanceruk #servicebusinessuk #canvatemplate #businesstools #entrepreneuruk #onlinebusinessuk #clientwork #digitaldownloads #businessgrowth #brandingtools #creativebusiness",
    },
    pinterest: {
      title: "Rate Card Template for Freelancers and Service Pricing",
      description: "Professional pricing templates to present your services clearly and confidently. Ideal for freelancers and agencies.",
      keywords: "rate card template,pricing guide,freelancer pricing,service pricing,canva template,business tools,price list,agency pricing",
    },
    gptImagePrompt: "clean rate card layout on desk minimal typography neutral colours laptop pen modern business aesthetic",
    videoPrompt: "Hook: you keep repeating your prices. Show rate card. Show structure. CTA: simplify your pricing.",
  },
  "biz-007": {
    etsy: {
      title: "Thank You Card Insert Template Small Business Packaging Canva Editable Brand Card Etsy Seller",
      description: "Add a personal touch to every order with branded thank you card insert templates. Perfect for small businesses looking to build customer loyalty and create a memorable unboxing experience.",
      tags: "thank you card insert,packaging insert,small business card,etsy seller tools,branding template,canva template,customer thank you,ecommerce packaging,brand insert,editable template,shop packaging,handmade business,order insert",
    },
    tiktok: {
      caption: "Your packaging feels incomplete? This is what you're missing.",
      hashtags: "#smallbusinessuk #etsyshop #packagingideas #branding #canvatemplates #ecommerce #customerexperience #digitalproducts #onlinebusiness #handmadebusiness",
    },
    instagram: {
      caption: "The smallest details can make the biggest difference. A simple thank you card helps your brand feel thoughtful and memorable. Create a better unboxing experience with ease.",
      hashtags: "#packagingdesign #smallbusinessowner #etsyuk #brandingideas #canvatemplate #customerexperience #onlinebusinessuk #ecommerceuk #digitaldownloads #brandidentity #businessgrowth #creativebusiness",
    },
    pinterest: {
      title: "Thank You Card Insert Template for Small Business Packaging",
      description: "Editable thank you card templates to enhance your packaging and build customer loyalty.",
      keywords: "thank you card,packaging insert,small business branding,etsy seller tools,canva template,ecommerce packaging,customer loyalty,brand design",
    },
    gptImagePrompt: "small thank you cards on packaging box tissue paper neutral tones soft light minimal branding aesthetic",
    videoPrompt: "Hook: your packaging feels basic. Show insert card. Show branding. CTA: improve your unboxing.",
  },
  "biz-008": {
    etsy: {
      title: "Gift Certificate Template Voucher Template Canva Editable Gift Card Small Business Voucher",
      description: "Offer stylish gift vouchers with editable templates designed for small businesses. Perfect for salons, boutiques and service providers to increase sales and attract new customers.",
      tags: "gift certificate,voucher template,gift card template,canva template,small business voucher,editable voucher,salon voucher,spa voucher,restaurant voucher,business tools,printable voucher,gift card design,retail voucher",
    },
    tiktok: {
      caption: "Want more sales without more work? Start using vouchers.",
      hashtags: "#smallbusinessuk #giftvoucher #businessgrowth #canvatemplates #entrepreneurlife #salonbusiness #retailbusiness #onlinebusiness #digitalproducts #marketingtips",
    },
    instagram: {
      caption: "Gift vouchers are one of the simplest ways to boost your income. These templates help you create something that looks professional and ready to sell straight away. Easy, effective and on-brand.",
      hashtags: "#giftvoucher #smallbusinessowner #retailuk #canvatemplate #businessgrowth #entrepreneuruk #onlinebusinessuk #marketingideas #digitaldownloads #brandingtools #creativebusiness #servicebusiness",
    },
    pinterest: {
      title: "Editable Gift Certificate Template for Small Businesses",
      description: "Professional voucher templates to increase sales and attract new customers. Easy to customise in Canva.",
      keywords: "gift certificate,voucher template,small business tools,canva template,gift card design,retail marketing,salon voucher,business growth",
    },
    gptImagePrompt: "elegant gift certificate on desk ribbon neutral tones soft lighting minimal branding clean layout aesthetic",
    videoPrompt: "Hook: you're missing easy extra income. Show voucher design. Show branding. CTA: start selling vouchers.",
  },
  "biz-009": {
    etsy: {
      title: "Email Signature Template Professional HTML Signature Canva Editable Business Email Branding",
      description: "Upgrade your emails with professional email signature templates designed for modern businesses. Includes clean layouts with photo, contact details and social links for a polished brand presence.",
      tags: "email signature template,professional email,html signature,canva template,business branding,corporate signature,freelancer tools,real estate signature,modern email design,branding template,contact signature,editable template,business email",
    },
    tiktok: {
      caption: "Your emails look basic… and it's costing you.",
      hashtags: "#emailmarketing #businessbranding #smallbusinessuk #canvatemplates #entrepreneurlife #corporatebranding #onlinebusiness #digitalproducts #productivity #brandingtips",
    },
    instagram: {
      caption: "Every email you send is part of your brand. A clean, professional signature helps you look more polished instantly. Make every message feel intentional and on-brand.",
      hashtags: "#emailsignature #businessbranding #corporateuk #canvatemplate #professionalbranding #entrepreneuruk #onlinebusinessuk #brandingdesign #digitaldownloads #businessgrowth #marketingtools #creativebusiness",
    },
    pinterest: {
      title: "Professional Email Signature Template for Business Branding",
      description: "Modern email signature templates to elevate your brand in every message you send.",
      keywords: "email signature,professional branding,canva template,business email,corporate design,branding tools,modern email,freelancer tools",
    },
    gptImagePrompt: "laptop screen showing email signature design clean layout neutral tones modern workspace aesthetic",
    videoPrompt: "Hook: your emails look unprofessional. Show signature upgrade. CTA: improve your email branding.",
  },
  "biz-010": {
    etsy: {
      title: "Freelancer Portfolio Template Canva Portfolio PDF Creative Portfolio Designer Portfolio Template",
      description: "Showcase your work professionally with a clean, modern portfolio template designed for freelancers. Perfect for presenting projects clearly and attracting higher quality clients.",
      tags: "portfolio template,freelancer portfolio,canva portfolio,designer portfolio,creative portfolio,editable template,photography portfolio,writer portfolio,business templates,client presentation,portfolio pdf,branding template,freelancer tools",
    },
    tiktok: {
      caption: "Your portfolio isn't getting clients? This is the problem.",
      hashtags: "#freelancerlife #portfolio #creativebusiness #canvatemplates #entrepreneurlife #clientwork #onlinebusiness #digitalproducts #designportfolio #branding",
    },
    instagram: {
      caption: "Your portfolio should do the selling for you. This template helps you present your work clearly, professionally and with confidence. Make it easier for clients to trust and choose you.",
      hashtags: "#portfolio #freelanceruk #creativeportfolio #canvatemplate #designersuk #onlinebusinessuk #brandingdesign #digitaldownloads #clientwork #businessgrowth #creativebusiness #entrepreneuruk",
    },
    pinterest: {
      title: "Freelancer Portfolio Template for Designers and Creatives",
      description: "Professional portfolio templates to showcase your work and attract better clients.",
      keywords: "portfolio template,freelancer portfolio,creative portfolio,canva template,designer portfolio,client presentation,branding tools,online business",
    },
    gptImagePrompt: "portfolio pages displayed on tablet and printed sheets neutral desk minimal layout modern branding soft lighting aesthetic",
    videoPrompt: "Hook: your portfolio isn't converting. Show clean portfolio pages. CTA: upgrade your portfolio.",
  },
  "edu-001": {
    etsy: {
      title: "Flashcards Printable Learning Cards Study Flashcards Kids Education Homeschool Flash Cards PDF",
      description: "Boost memory and understanding with printable flashcards designed for quick revision and effective learning. Ideal for homeschooling, classrooms and early years education to support structured study.",
      tags: "flashcards printable,learning flashcards,study cards,homeschool resources,kids learning tools,education printable,revision cards,early learning,teaching resources,school printable,memory learning,study aid,kids education",
    },
    tiktok: {
      caption: "Kids forget everything they just learned? This fixes it fast.",
      hashtags: "#kidslearning #homeschooluk #studyhack #educationtools #parentingtips #learningthroughplay #teachersuk #earlyyears #studytools #printables",
    },
    instagram: {
      caption: "Learning sticks better when it's simple and visual. These flashcards help children build confidence, improve memory and stay engaged without overwhelm. Perfect for everyday learning at home or school.",
      hashtags: "#homeschooluk #kidseducation #learningtools #studyresources #teachersuk #earlylearning #educationideas #printablesuk #learningathome #schoolresources #studyhelp #parentinguk",
    },
    pinterest: {
      title: "Printable Flashcards for Kids Learning and Memory Building",
      description: "Printable flashcards designed to improve memory and learning in children. Ideal for homeschooling and early education.",
      keywords: "flashcards printable,kids learning,study cards,homeschool resources,education tools,revision cards,early learning,printables",
    },
    gptImagePrompt: "flat lay printable flashcards on desk colourful cards pencils notebook soft natural light clean minimal learning setup",
    videoPrompt: "Hook: kids forget what they learn. Show flashcards being used. Show quick learning interaction. CTA: make learning stick with flashcards.",
  },
  "edu-002": {
    etsy: {
      title: "Colouring Pages Printable Kids Colouring Sheets Educational Activity Pages PDF Download",
      description: "Keep children engaged with printable colouring pages designed to support creativity and focus. Perfect for quiet time, learning activities and developing fine motor skills.",
      tags: "colouring pages,kids colouring sheets,printable colouring,colouring book pages,children activities,learning printables,homeschool activity,kids art,creative learning,early years,fun learning,activity sheets,colouring printable",
    },
    tiktok: {
      caption: "Need something that keeps kids busy AND learning? This works every time.",
      hashtags: "#kidsactivities #colouringpages #parentinguk #learningthroughplay #homeschooluk #creativekids #quiettime #educationfun #printables #activityideas",
    },
    instagram: {
      caption: "Simple activities can have the biggest impact. These colouring pages help children relax, focus and express creativity while still learning. Ideal for home, school or travel.",
      hashtags: "#kidsactivitiesuk #colouringpages #creativelearning #homeschooluk #parentingtips #learningthroughplay #earlyyears #educationideas #printablesuk #activityforkids #funlearning #creativekids",
    },
    pinterest: {
      title: "Printable Colouring Pages for Kids Creative Learning",
      description: "Fun and engaging colouring pages to support creativity and focus in children.",
      keywords: "colouring pages,kids activities,printable colouring,learning activities,homeschool resources,creative learning,activity sheets,early years",
    },
    gptImagePrompt: "colouring pages spread on table crayons markers kids drawing setup bright colours soft lighting playful learning environment",
    videoPrompt: "Hook: kids get bored quickly. Show colouring pages. Show engagement. CTA: keep kids busy and learning.",
  },
  "edu-003": {
    etsy: {
      title: "Handwriting Practice Worksheets Printable Learn to Write Letters Kids Writing Sheets PDF",
      description: "Support handwriting development with printable worksheets designed for letter formation and writing practice. Ideal for early years, homeschooling and classroom learning.",
      tags: "handwriting practice,writing worksheets,learn to write,printable worksheets,kids education,early learning,homeschool printable,letter practice,writing skills,school resources,education printable,learning sheets,kids writing",
    },
    tiktok: {
      caption: "Messy handwriting causing frustration? This makes practice easy.",
      hashtags: "#handwritingpractice #kidslearning #homeschooluk #educationtools #learningathome #teachersuk #earlyyears #studytools #printables #parentingtips",
    },
    instagram: {
      caption: "Confidence in writing starts with good foundations. These worksheets make it simple for children to practise consistently and improve without pressure. A structured way to build skills over time.",
      hashtags: "#handwritingpractice #kidseducation #homeschooluk #learningtools #teachersuk #earlylearning #educationideas #printablesuk #schoolresources #learningathome #studyhelp #parentinguk",
    },
    pinterest: {
      title: "Handwriting Practice Worksheets for Kids Learning to Write",
      description: "Printable worksheets to improve handwriting and letter formation skills.",
      keywords: "handwriting worksheets,learn to write,kids education,printable worksheets,early learning,homeschool resources,writing practice,school printable",
    },
    gptImagePrompt: "handwriting worksheets on desk pencil notebook clean layout natural light minimal study environment",
    videoPrompt: "Hook: messy handwriting struggle. Show worksheet practice. Show improvement. CTA: improve handwriting easily.",
  },
  "edu-004": {
    etsy: {
      title: "Homeschool Curriculum Planner Printable Education Planner Lesson Planning Organisation PDF",
      description: "Stay organised with a homeschool curriculum planner designed to structure lessons and track progress. Perfect for parents managing home education with clarity and confidence.",
      tags: "homeschool planner,curriculum planner,home education,education planner,learning organiser,printable planner,homeschool resources,lesson planning,study planner,kids learning,education printable,planning tools,school organisation",
    },
    tiktok: {
      caption: "Homeschooling feels chaotic? This gives you instant structure.",
      hashtags: "#homeschooluk #educationplanner #parentingtips #learningathome #organisation #studytools #printables #teachingresources #schoolplanning #productivity",
    },
    instagram: {
      caption: "When everything is organised, learning becomes easier. This planner helps you structure lessons, track progress and stay consistent without overwhelm. A simple system that actually works.",
      hashtags: "#homeschooluk #educationplanner #learningathome #organisationtools #parentinguk #studyplanner #printablesuk #teachersuk #schoolresources #productivitytools #learningtools #homeeducation",
    },
    pinterest: {
      title: "Homeschool Curriculum Planner for Organised Learning",
      description: "Printable homeschool planner to organise lessons and simplify home education.",
      keywords: "homeschool planner,curriculum planner,home education,lesson planning,education tools,printable planner,learning organisation,study planner",
    },
    gptImagePrompt: "homeschool planner pages on desk laptop notebook coffee neutral tones organised workspace aesthetic",
    videoPrompt: "Hook: homeschooling feels overwhelming. Show planner pages. Show structured layout. CTA: organise your lessons easily.",
  },
  "edu-005": {
    etsy: {
      title: "Reward Chart Printable Behaviour Chart Kids Routine Tracker Chore Chart PDF",
      description: "Encourage positive behaviour with printable reward charts designed for kids. Perfect for building routines, motivation and consistency at home or in the classroom.",
      tags: "reward chart,kids behaviour chart,printable reward chart,behaviour tracker,chore chart,kids routine,positive reinforcement,parenting tools,education printable,learning rewards,homeschool tools,kids motivation,printable chart",
    },
    tiktok: {
      caption: "Struggling to get kids to follow routines? This makes it simple.",
      hashtags: "#parentinguk #rewardchart #kidsroutine #behaviourtips #homeschooluk #learningtools #printables #positiveparenting #kidsmotivation #familylife",
    },
    instagram: {
      caption: "Consistency becomes easier when kids can see their progress. These reward charts help build positive habits in a simple, motivating way. Small changes that make a big difference.",
      hashtags: "#rewardchart #parentingtips #kidsroutine #homeschooluk #positiveparenting #educationtools #printablesuk #learningathome #familyorganisation #kidsmotivation #behaviourchart #parentinguk",
    },
    pinterest: {
      title: "Reward Chart Printable for Kids Behaviour and Routine",
      description: "Printable reward charts to help children build positive habits and routines.",
      keywords: "reward chart,kids behaviour,printable chart,parenting tools,positive habits,homeschool resources,kids routine,learning tools",
    },
    gptImagePrompt: "reward chart on wall with stickers kids desk colourful setup bright lighting playful learning environment",
    videoPrompt: "Hook: routines aren't working. Show reward chart. Show progress tracking. CTA: build better habits.",
  },
  "edu-006": {
    etsy: {
      title: "Learning Activity Bundle Printable Kids Worksheets Educational Activities Homeschool Pack PDF",
      description: "Keep children engaged with a bundle of printable learning activities designed to support development and creativity. Ideal for homeschooling, classrooms and home learning.",
      tags: "learning activities,activity bundle,kids worksheets,education printable,homeschool resources,learning pack,kids education,activity sheets,creative learning,study tools,early years,printables,learning fun",
    },
    tiktok: {
      caption: "Kids losing focus during learning? This bundle keeps them engaged.",
      hashtags: "#kidsactivities #learningbundle #homeschooluk #educationtools #parentingtips #learningthroughplay #printables #studytools #earlyyears #creativelearning",
    },
    instagram: {
      caption: "Keeping kids engaged while learning can feel difficult. This bundle gives you ready-to-use activities that are fun, structured and easy to follow. Perfect for everyday learning at home.",
      hashtags: "#kidslearning #homeschooluk #learningactivities #educationtools #parentinguk #printablesuk #earlyyears #creativelearning #studytools #learningathome #activityideas #kidseducation",
    },
    pinterest: {
      title: "Printable Learning Activity Bundle for Kids Education",
      description: "Educational activity bundle to keep children engaged while developing skills.",
      keywords: "learning activities,kids worksheets,education bundle,homeschool resources,printables,creative learning,study tools,activity sheets",
    },
    gptImagePrompt: "learning worksheets spread on desk pencils colourful materials kids activity setup bright soft lighting",
    videoPrompt: "Hook: kids lose interest quickly. Show activity bundle. Show engagement. CTA: keep learning fun.",
  },
  "edu-007": {
    etsy: {
      title: "Book Report Template Printable Reading Worksheet School Project Template PDF",
      description: "Make book reports easier with printable templates designed for clear structure and understanding. Perfect for students, teachers and homeschooling support.",
      tags: "book report template,reading worksheet,school project,printable worksheet,education printable,homeschool resources,reading log,study tools,school printable,learning sheets,student resources,book summary,education tools",
    },
    tiktok: {
      caption: "Book reports taking too long? This simplifies everything.",
      hashtags: "#schoolwork #bookreport #studentlife #educationtools #homeschooluk #studyhelp #printables #learningtools #teachersuk #studyhack",
    },
    instagram: {
      caption: "Book reports don't have to feel overwhelming. This template helps structure ideas and make writing easier. A simple way to build confidence in learning.",
      hashtags: "#bookreport #studentresources #educationtools #homeschooluk #studyplanner #printablesuk #learningathome #schoolresources #studyhelp #teachersuk #kidseducation #learningtools",
    },
    pinterest: {
      title: "Book Report Template Printable for Students",
      description: "Printable book report worksheet to help students organise and present ideas clearly.",
      keywords: "book report template,reading worksheet,student tools,school printable,education resources,study help,learning sheets,homeschool tools",
    },
    gptImagePrompt: "book report worksheet on desk open book pen notebook natural light study setup",
    videoPrompt: "Hook: book reports feel confusing. Show template. Show structure. CTA: simplify school work.",
  },
  "edu-008": {
    etsy: {
      title: "Times Table Chart Printable Multiplication Chart Kids Maths Learning Poster PDF",
      description: "Support maths learning with printable multiplication charts designed for quick reference and practice. Perfect for building confidence in times tables and basic maths skills.",
      tags: "times table chart,multiplication chart,maths printable,kids maths,learning chart,education printable,homeschool maths,study tools,maths poster,school resources,learning aid,maths help,printable chart",
    },
    tiktok: {
      caption: "Times tables causing stress? This makes it easier to learn.",
      hashtags: "#mathshelp #timestables #kidslearning #homeschooluk #educationtools #studyhack #learningathome #printables #mathslearning #schooltips",
    },
    instagram: {
      caption: "Maths becomes easier when it's clear and visual. These charts help children practise and remember times tables with confidence. A simple tool that works every day.",
      hashtags: "#mathslearning #timestables #kidseducation #homeschooluk #educationtools #printablesuk #learningathome #studytools #schoolresources #mathshelp #learningcharts #parentinguk",
    },
    pinterest: {
      title: "Times Table Chart Printable for Kids Maths Learning",
      description: "Multiplication charts to help children learn and practise times tables effectively.",
      keywords: "times tables,multiplication chart,maths printable,kids maths,learning tools,homeschool maths,study aids,education resources",
    },
    gptImagePrompt: "multiplication chart on desk colourful layout pencils kids learning setup bright lighting",
    videoPrompt: "Hook: times tables frustration. Show chart. Show learning. CTA: make maths easier.",
  },
  "edu-009": {
    etsy: {
      title: "Reading Log Printable Book Tracker Kids Reading Tracker Worksheet PDF",
      description: "Encourage consistent reading with printable reading logs designed to track progress and build habits. Perfect for students, homeschooling and daily learning routines.",
      tags: "reading log,book tracker,reading tracker,printable worksheet,kids reading,education printable,homeschool resources,study tools,reading habits,school printable,learning sheets,student tools,reading chart",
    },
    tiktok: {
      caption: "Kids not reading consistently? This helps build the habit.",
      hashtags: "#readinglog #kidsreading #homeschooluk #educationtools #learninghabits #printables #studytools #parentingtips #readingtime #schoolresources",
    },
    instagram: {
      caption: "Building a reading habit starts with consistency. These logs make it easy to track progress and stay motivated. A simple way to support learning every day.",
      hashtags: "#readinglog #kidseducation #homeschooluk #learningtools #printablesuk #studytools #readinghabits #schoolresources #learningathome #parentinguk #educationideas #studentlife",
    },
    pinterest: {
      title: "Reading Log Printable for Kids Book Tracking",
      description: "Printable reading logs to help children build consistent reading habits and track progress.",
      keywords: "reading log,book tracker,kids reading,education tools,homeschool resources,study tools,reading habits,learning sheets",
    },
    gptImagePrompt: "reading log worksheet on desk books stacked pen cosy study environment soft natural light",
    videoPrompt: "Hook: kids don't read enough. Show reading log. Show tracking progress. CTA: build reading habits.",
  },
  "edu-010": {
    etsy: {
      title: "STEM Activity Cards Printable Kids Science Learning Activities Homeschool STEM Pack PDF",
      description: "Inspire curiosity with printable STEM activity cards designed for hands-on learning and problem-solving. Perfect for exploring science, technology and maths in a fun, engaging way.",
      tags: "stem activities,stem cards,science printable,kids learning,education printable,homeschool stem,activity cards,learning tools,stem education,science activities,early learning,printables,education pack",
    },
    tiktok: {
      caption: "Kids bored with learning? This makes it exciting again.",
      hashtags: "#stemlearning #kidsactivities #educationtools #homeschooluk #learningthroughplay #sciencefun #printables #studytools #creativelearning #kidseducation",
    },
    instagram: {
      caption: "Learning should feel exciting, not forced. These STEM cards help children explore, experiment and think creatively. A simple way to make education more engaging.",
      hashtags: "#stemlearning #kidseducation #homeschooluk #learningthroughplay #scienceactivities #printablesuk #creativelearning #educationtools #learningathome #parentinguk #studytools #earlyyears",
    },
    pinterest: {
      title: "STEM Activity Cards Printable for Kids Learning",
      description: "Printable STEM cards to encourage hands-on learning and creativity.",
      keywords: "stem activities,science learning,kids education,homeschool stem,activity cards,learning tools,printables,creative learning",
    },
    gptImagePrompt: "stem activity cards on table kids science experiment setup bright colours educational tools soft lighting",
    videoPrompt: "Hook: kids find learning boring. Show STEM cards. Show activity. CTA: make learning exciting.",
  },
  "journal-001": {
    etsy: {
      title: "Gratitude Journal Printable Daily Gratitude Prompts Mindfulness Journal Self Care Journal PDF",
      description: "Build a positive mindset with a printable gratitude journal designed to encourage daily reflection and mindfulness. Simple prompts help you focus on what matters and improve overall wellbeing.",
      tags: "gratitude journal,self care journal,mindfulness journal,daily journal,printable journal,wellbeing journal,mental wellness,positive mindset,journaling prompts,self reflection,habit building,printablesuk,self care routine",
    },
    tiktok: {
      caption: "Feeling stuck in negative thoughts? This changes your mindset fast.",
      hashtags: "#gratitudejournal #mindfulnessuk #selfcareuk #mentalwellbeing #journaling #positivemindset #dailyhabits #wellnessjourney #printables #selfgrowth",
    },
    instagram: {
      caption: "A few minutes of gratitude each day can shift everything. This journal helps you slow down, reflect and focus on the positives in your life. Simple, powerful and easy to stick with.",
      hashtags: "#gratitudepractice #selfcareuk #mindfulnessuk #journaling #mentalwellbeing #dailyhabits #wellnessjourney #positivemindset #printablesuk #selfgrowth #routinebuilding #wellbeingtools",
    },
    pinterest: {
      title: "Gratitude Journal Printable for Daily Mindfulness",
      description: "Printable gratitude journal with daily prompts to improve mindset and wellbeing.",
      keywords: "gratitude journal,mindfulness journal,self care journal,daily reflection,mental wellbeing,journaling prompts,positive mindset,printable journal",
    },
    gptImagePrompt: "gratitude journal pages on desk neutral tones coffee cup candle soft natural light calm aesthetic minimal setup",
    videoPrompt: "Hook: negative mindset taking over. Show journaling prompts. Show calm routine. CTA: start your gratitude habit.",
  },
  "journal-002": {
    etsy: {
      title: "Shadow Work Journal Printable Guided Prompts Self Reflection Healing Journal PDF",
      description: "Explore deeper self-awareness with a printable shadow work journal featuring guided prompts. Designed to support reflection, healing and personal growth in a structured way.",
      tags: "shadow work journal,self reflection journal,healing journal,journaling prompts,mental wellness,printable journal,self discovery,therapy journal,personal growth,wellbeing tools,mindfulness,printablesuk,inner work",
    },
    tiktok: {
      caption: "Avoiding your thoughts? This journal helps you face them safely.",
      hashtags: "#shadowwork #selfreflection #mentalhealthuk #healingjourney #journaling #selfgrowth #mindfulness #innerwork #wellnessjourney #printables",
    },
    instagram: {
      caption: "Growth starts with understanding yourself. This journal gives you guided prompts to explore your thoughts, patterns and emotions in a safe, structured way. A powerful tool for real change.",
      hashtags: "#shadowwork #selfreflection #mentalhealthuk #healingjourney #journaling #selfgrowth #mindfulnessuk #innerwork #wellnessjourney #printablesuk #personaldevelopment #mentalwellbeing",
    },
    pinterest: {
      title: "Shadow Work Journal Printable for Self Reflection",
      description: "Guided shadow work journal prompts to support healing and personal growth.",
      keywords: "shadow work journal,self reflection,healing journal,journaling prompts,mental health tools,self discovery,personal growth,printable journal",
    },
    gptImagePrompt: "shadow work journal on desk candle notebook dim soft lighting calm neutral tones reflective aesthetic",
    videoPrompt: "Hook: avoiding difficult thoughts. Show prompts. Show journaling. CTA: start your self reflection journey.",
  },
  "journal-003": {
    etsy: {
      title: "Goal Setting Workbook Printable Goal Planner Productivity Planner Life Goals PDF",
      description: "Turn your ideas into action with a printable goal setting workbook designed to help you plan, track and achieve your goals. Perfect for building clarity, focus and long-term success.",
      tags: "goal setting planner,goal workbook,productivity planner,life planner,printable planner,goal tracker,personal development,habit tracker,planning tools,self improvement,organisation,printablesuk,goal planning",
    },
    tiktok: {
      caption: "Setting goals but never achieving them? This fixes that.",
      hashtags: "#goalsetting #productivityuk #selfgrowth #planningtools #successmindset #organisation #printables #lifeplanning #habitbuilding #motivation",
    },
    instagram: {
      caption: "Clear goals lead to real progress. This workbook helps you break down your ideas into actionable steps so you can stay focused and actually achieve them. Simple structure, real results.",
      hashtags: "#goalsetting #productivityuk #selfgrowth #planningtools #successmindset #organisation #printablesuk #lifeplanning #habitbuilding #motivation #personaldevelopment #goalplanner",
    },
    pinterest: {
      title: "Goal Setting Workbook Printable for Productivity and Planning",
      description: "Printable workbook to help you set, plan and achieve your goals effectively.",
      keywords: "goal setting,productivity planner,goal workbook,life planner,planning tools,self improvement,habit tracker,printable planner",
    },
    gptImagePrompt: "goal setting workbook pages on desk laptop coffee neutral tones organised workspace aesthetic",
    videoPrompt: "Hook: goals not happening. Show workbook pages. Show planning steps. CTA: achieve your goals.",
  },
  "journal-004": {
    etsy: {
      title: "Self Care Journal Printable Wellness Tracker Daily Self Care Planner Mental Health PDF",
      description: "Prioritise your wellbeing with a printable self care journal designed to track habits, routines and mental health. A simple way to stay consistent and take better care of yourself.",
      tags: "self care journal,wellness tracker,mental health journal,printable journal,self care planner,wellbeing tools,habit tracker,daily routine,personal care,mental wellness,self improvement,printablesuk,wellness planner",
    },
    tiktok: {
      caption: "Always putting yourself last? This helps you reset.",
      hashtags: "#selfcareuk #wellnessjourney #mentalhealthuk #journaling #habittracker #selfgrowth #mindfulness #dailyhabits #printables #wellbeing",
    },
    instagram: {
      caption: "Taking care of yourself shouldn't feel complicated. This journal helps you track habits, reflect and stay consistent with your wellbeing routine. Small steps that make a big difference.",
      hashtags: "#selfcareuk #wellnessjourney #mentalhealthuk #journaling #habittracker #selfgrowth #mindfulnessuk #dailyhabits #printablesuk #wellbeingtools #routinebuilding #personaldevelopment",
    },
    pinterest: {
      title: "Self Care Journal Printable Wellness and Habit Tracker",
      description: "Printable self care journal to track habits and improve wellbeing daily.",
      keywords: "self care journal,wellness tracker,mental health journal,habit tracker,printable journal,wellbeing tools,self improvement,daily routine",
    },
    gptImagePrompt: "self care journal on desk candle tea soft lighting cosy setup neutral tones calm aesthetic",
    videoPrompt: "Hook: neglecting self care. Show journal. Show tracking habits. CTA: prioritise yourself.",
  },
  "journal-005": {
    etsy: {
      title: "Mental Health Workbook Printable Anxiety Journal Self Help Journal Guided Prompts PDF",
      description: "Support your mental wellbeing with a printable anxiety and mental health workbook featuring guided prompts and exercises. Designed to help you reflect, manage stress and build healthier habits.",
      tags: "mental health journal,anxiety workbook,self help journal,wellbeing journal,printable journal,mental wellness,therapy tools,journaling prompts,stress management,self reflection,personal growth,printablesuk,wellness tools",
    },
    tiktok: {
      caption: "Feeling overwhelmed all the time? This helps you manage it.",
      hashtags: "#mentalhealthuk #anxietyhelp #wellnessjourney #journaling #selfcareuk #mindfulness #stressrelief #selfgrowth #printables #mentalwellbeing",
    },
    instagram: {
      caption: "Looking after your mental health starts with understanding it. This workbook gives you simple prompts and exercises to help you reflect, process and feel more in control. A gentle step towards better wellbeing.",
      hashtags: "#mentalhealthuk #anxietyhelp #wellnessjourney #journaling #selfcareuk #mindfulnessuk #stressrelief #selfgrowth #printablesuk #mentalwellbeing #personaldevelopment #healingtools",
    },
    pinterest: {
      title: "Mental Health Workbook Printable for Anxiety and Wellbeing",
      description: "Printable workbook with guided prompts to support mental health and reduce anxiety.",
      keywords: "mental health journal,anxiety workbook,self help journal,wellbeing tools,journaling prompts,stress relief,personal growth,printable journal",
    },
    gptImagePrompt: "mental health workbook on desk candle soft blanket warm lighting calm neutral tones cosy environment",
    videoPrompt: "Hook: feeling overwhelmed. Show workbook. Show prompts. CTA: support your mental health.",
  },
  "journal-006": {
    etsy: {
      title: "Morning Routine Journal Printable Mindfulness Journal Daily Routine Planner PDF",
      description: "Start your day with intention using a printable morning routine journal designed to build positive habits and mindfulness. Perfect for creating structure and a calm start to your day.",
      tags: "morning routine journal,mindfulness journal,daily planner,printable journal,habit tracker,self care planner,wellbeing tools,productivity planner,positive habits,daily routine,self improvement,printablesuk,wellness planner",
    },
    tiktok: {
      caption: "Your mornings feel chaotic? This helps you reset.",
      hashtags: "#morningroutine #mindfulnessuk #selfcareuk #dailyhabits #productivity #wellnessjourney #printables #routinebuilding #selfgrowth #organisation",
    },
    instagram: {
      caption: "How you start your morning shapes your entire day. This journal helps you create a calm, structured routine that sets you up for success. Simple habits that make a difference.",
      hashtags: "#morningroutine #mindfulnessuk #selfcareuk #dailyhabits #productivity #wellnessjourney #printablesuk #routinebuilding #selfgrowth #organisationtools #personaldevelopment #wellbeing",
    },
    pinterest: {
      title: "Morning Routine Journal Printable for Mindfulness and Productivity",
      description: "Printable morning journal to build positive habits and start your day with intention.",
      keywords: "morning routine,mindfulness journal,daily habits,productivity planner,self care journal,printable planner,wellbeing tools,routine planner",
    },
    gptImagePrompt: "morning journal on desk coffee sunlight minimal aesthetic calm workspace neutral tones",
    videoPrompt: "Hook: chaotic mornings. Show journal routine. Show calm setup. CTA: start your day right.",
  },
  "journal-007": {
    etsy: {
      title: "Manifestation Journal Printable Vision Board Workbook Law of Attraction Planner PDF",
      description: "Manifest your goals with a printable journal designed to help you visualise, plan and align your mindset. Includes prompts and exercises to support clarity and intention.",
      tags: "manifestation journal,vision board workbook,law of attraction,goal journal,printable journal,self development,mindset planner,positive thinking,personal growth,wellbeing tools,affirmations,printablesuk,goal setting",
    },
    tiktok: {
      caption: "Your goals feel out of reach? Start manifesting them properly.",
      hashtags: "#manifestation #lawofattraction #selfgrowth #mindsetshift #goalsetting #wellnessjourney #journaling #printables #personaldevelopment #motivation",
    },
    instagram: {
      caption: "Clarity and intention are everything when it comes to your goals. This journal helps you visualise, plan and stay aligned with what you want to achieve. Turn ideas into reality step by step.",
      hashtags: "#manifestation #lawofattraction #selfgrowth #mindsetshift #goalsetting #wellnessjourney #journaling #printablesuk #personaldevelopment #motivation #visionboard #successmindset",
    },
    pinterest: {
      title: "Manifestation Journal Printable Vision Board and Goal Planner",
      description: "Printable manifestation journal to help you visualise goals and build a positive mindset.",
      keywords: "manifestation journal,vision board,law of attraction,goal planner,mindset journal,self development,positive thinking,printable journal",
    },
    gptImagePrompt: "manifestation journal on desk crystals candle soft light neutral tones aesthetic setup",
    videoPrompt: "Hook: goals feel far away. Show journaling prompts. Show vision board. CTA: manifest your goals.",
  },
  "journal-008": {
    etsy: {
      title: "Pregnancy Journal Printable Pregnancy Tracker Milestone Journal Baby Planning PDF",
      description: "Capture every moment with a printable pregnancy journal designed to track milestones, thoughts and experiences. A beautiful way to document your journey and create lasting memories.",
      tags: "pregnancy journal,pregnancy tracker,baby journal,milestone tracker,printable journal,mum to be,baby planning,journal prompts,wellbeing journal,personal memories,printablesuk,parenting tools,baby journey",
    },
    tiktok: {
      caption: "Don't forget these special moments… this helps you capture them.",
      hashtags: "#pregnancyjourney #mumtobe #babyplanning #parentinguk #journaling #memorykeeping #printables #wellbeing #pregnancytracker #familylife",
    },
    instagram: {
      caption: "Pregnancy is a journey you'll want to remember forever. This journal helps you capture milestones, thoughts and special moments in a simple and meaningful way. A keepsake you'll always value.",
      hashtags: "#pregnancyjournal #mumtobe #babyplanning #parentinguk #journaling #memorykeeping #printablesuk #wellbeing #pregnancytracker #familylife #motherhood #babyjourney",
    },
    pinterest: {
      title: "Pregnancy Journal Printable for Tracking Milestones",
      description: "Printable pregnancy journal to capture memories and track milestones throughout your journey.",
      keywords: "pregnancy journal,baby journal,pregnancy tracker,milestone tracker,mum to be,printable journal,parenting tools,baby planning",
    },
    gptImagePrompt: "pregnancy journal on desk baby items soft neutral tones cosy lighting calm aesthetic",
    videoPrompt: "Hook: forgetting pregnancy moments. Show journal. Show milestone tracking. CTA: capture your journey.",
  },
  "journal-009": {
    etsy: {
      title: "Retirement Planning Workbook Printable Financial Planning Journal Future Planner PDF",
      description: "Plan your future with confidence using a printable retirement planning workbook. Designed to help you organise finances, set goals and prepare for a secure and fulfilling retirement.",
      tags: "retirement planner,financial planning,retirement workbook,future planning,printable planner,finance tracker,goal setting,organisation tools,money planning,life planning,printablesuk,financial goals,retirement journal",
    },
    tiktok: {
      caption: "Not sure if you're ready for retirement? Start planning properly.",
      hashtags: "#retirementplanning #financialplanning #moneygoals #futureplanning #personalfinanceuk #printables #organisation #goalsetting #lifeplanning #finance",
    },
    instagram: {
      caption: "Planning for the future doesn't have to feel overwhelming. This workbook helps you organise your finances, set clear goals and feel more confident about what's ahead. A practical step towards peace of mind.",
      hashtags: "#retirementplanning #financialplanning #moneygoals #futureplanning #personalfinanceuk #printablesuk #organisationtools #goalsetting #lifeplanning #finance #financialwellbeing #planningtools",
    },
    pinterest: {
      title: "Retirement Planning Workbook Printable for Financial Goals",
      description: "Printable workbook to help you plan finances and prepare for retirement with confidence.",
      keywords: "retirement planning,financial planning,retirement workbook,money goals,future planning,printable planner,finance tracker,goal setting",
    },
    gptImagePrompt: "retirement planning workbook on desk calculator notebook coffee neutral tones organised workspace",
    videoPrompt: "Hook: unsure about retirement. Show workbook. Show planning steps. CTA: plan your future.",
  },
  "journal-010": {
    etsy: {
      title: "Creative Writing Journal Printable Writing Prompts Story Ideas Journal PDF",
      description: "Unlock creativity with a printable writing journal filled with prompts and ideas. Perfect for writers looking to build consistency, overcome blocks and develop their storytelling skills.",
      tags: "writing journal,creative writing prompts,story ideas,printable journal,writing practice,author tools,creative writing,writing prompts,journal prompts,writing inspiration,self expression,printablesuk,writing habit",
    },
    tiktok: {
      caption: "Writer's block stopping you? This gets ideas flowing again.",
      hashtags: "#writingprompts #creativewriting #writersblock #authorlife #journaling #selfexpression #writingcommunity #printables #writingtips #creativity",
    },
    instagram: {
      caption: "Creativity grows when you show up consistently. This journal gives you prompts and ideas to help you write more, think deeper and stay inspired. Perfect for building a writing habit.",
      hashtags: "#creativewriting #writingprompts #writersblock #authorlife #journaling #selfexpression #writingcommunity #printablesuk #writingtips #creativity #writinghabit #storytelling",
    },
    pinterest: {
      title: "Creative Writing Journal Printable with Prompts and Ideas",
      description: "Printable writing journal to spark creativity and build consistent writing habits.",
      keywords: "writing journal,creative writing prompts,story ideas,writing practice,author tools,printable journal,writing inspiration,creativity",
    },
    gptImagePrompt: "writing journal on desk notebook pen coffee soft lighting cosy creative workspace",
    videoPrompt: "Hook: writer's block frustration. Show prompts. Show writing flow. CTA: start writing today.",
  },
  "notion-001": {
    etsy: {
      title: "Notion Student Dashboard Template Study Planner Notion Template Academic Organiser",
      description: "Stay organised with a Notion student dashboard designed to manage assignments, deadlines and study schedules in one place. Perfect for improving productivity and keeping track of academic life.",
      tags: "notion student template,study planner notion,notion dashboard,academic organiser,student productivity,notion template,study tracker,university planner,school organisation,notion setup,productivity tools,study system,notion uk",
    },
    tiktok: {
      caption: "Your uni life feels chaotic? This dashboard fixes everything.",
      hashtags: "#notiontemplate #studentlifeuk #productivity #studytips #organisation #notiondashboard #universitylife #studyplanner #digitalplanning #notionsetup",
    },
    instagram: {
      caption: "Keeping up with assignments and deadlines doesn't have to feel overwhelming. This Notion dashboard brings everything into one clean system so you can stay focused and organised. Study smarter, not harder.",
      hashtags: "#notiontemplate #studentlifeuk #productivitytools #studytips #organisation #notiondashboard #universitylife #studyplanner #digitalplanning #notionsetup #academicsuccess #studentorganisation",
    },
    pinterest: {
      title: "Notion Student Dashboard Template for Study Organisation",
      description: "All-in-one Notion student dashboard to manage assignments, deadlines and study planning.",
      keywords: "notion student template,study planner notion,academic organiser,student dashboard,productivity tools,notion setup,study tracker,university planner",
    },
    gptImagePrompt: "notion dashboard on laptop screen student desk notebook coffee minimal workspace soft lighting clean aesthetic",
    videoPrompt: "Hook: student life feels messy. Show dashboard layout. Show organised sections. CTA: organise your studies.",
  },
  "notion-002": {
    etsy: {
      title: "Notion Budget Tracker Template Finance Tracker Notion Personal Finance Dashboard",
      description: "Take control of your money with a Notion budget tracker designed to monitor spending, savings and financial goals. A simple system to improve organisation and build better financial habits.",
      tags: "notion budget template,finance tracker notion,money tracker,notion finance,personal finance,expense tracker,notion dashboard,budget planner,financial goals,money management,notion system,productivity tools,notion uk",
    },
    tiktok: {
      caption: "No idea where your money goes each month? This shows everything.",
      hashtags: "#budgetinguk #notiontemplate #moneytracker #personalfinance #financialgoals #notiondashboard #moneytips #organisation #productivity #notionsetup",
    },
    instagram: {
      caption: "Managing your money becomes easier when everything is clear. This Notion template helps you track spending, plan budgets and stay on top of your finances without stress. Simple and effective.",
      hashtags: "#budgetinguk #notiontemplate #moneymanagement #personalfinance #financialplanning #notiondashboard #moneygoals #organisationtools #productivitytools #notionsetup #financeuk #digitalplanning",
    },
    pinterest: {
      title: "Notion Budget Tracker Template for Personal Finance",
      description: "Track spending, savings and financial goals with this easy-to-use Notion budget template.",
      keywords: "notion budget,finance tracker,money management,personal finance,expense tracker,notion dashboard,financial goals,budget planner",
    },
    gptImagePrompt: "notion budget tracker on laptop calculator notebook coffee neutral tones clean financial workspace",
    videoPrompt: "Hook: money disappears each month. Show budget tracker. Show categories. CTA: take control of your finances.",
  },
  "notion-003": {
    etsy: {
      title: "Notion Content Calendar Template Creator Planner Social Media Planner Notion Dashboard",
      description: "Plan and organise your content with a Notion content calendar designed for creators and businesses. Manage posts, ideas and schedules in one streamlined system.",
      tags: "notion content calendar,social media planner,content planner notion,notion dashboard,creator tools,content organisation,posting schedule,notion template,marketing planner,content strategy,notion setup,productivity tools,notion uk",
    },
    tiktok: {
      caption: "Posting randomly and seeing no growth? This fixes your content strategy.",
      hashtags: "#contentcreator #notiontemplate #socialmediaplanner #contentstrategy #marketingtips #notiondashboard #growthtips #digitalplanning #productivity #notionsetup",
    },
    instagram: {
      caption: "Consistency is key when it comes to content. This Notion template helps you plan, organise and stay on track so you can grow without feeling overwhelmed. Everything in one place.",
      hashtags: "#contentcreatoruk #notiontemplate #socialmediaplanner #contentstrategy #marketingtools #notiondashboard #growthtips #digitalplanning #productivitytools #notionsetup #onlinebusinessuk #contentplanning",
    },
    pinterest: {
      title: "Notion Content Calendar Template for Creators and Businesses",
      description: "Organise your content and stay consistent with this Notion content planning template.",
      keywords: "notion content calendar,social media planner,content strategy,creator tools,notion dashboard,marketing planner,content planning,notion template",
    },
    gptImagePrompt: "notion content calendar on laptop social media icons notebook coffee modern workspace clean aesthetic",
    videoPrompt: "Hook: inconsistent posting. Show content calendar. Show scheduling. CTA: plan your content properly.",
  },
  "notion-004": {
    etsy: {
      title: "Notion Habit Tracker Template Life Planner Notion Dashboard Daily Habit Tracker",
      description: "Build better habits with a Notion habit tracker designed to track routines and improve consistency. A simple system to stay accountable and achieve your goals.",
      tags: "notion habit tracker,habit tracker notion,life planner,notion dashboard,daily habits,productivity tools,self improvement,notion template,habit tracking,routine planner,goal tracking,notion setup,notion uk",
    },
    tiktok: {
      caption: "Struggling to stay consistent with habits? This makes it easy.",
      hashtags: "#habittracker #notiontemplate #selfimprovement #dailyhabits #productivity #notiondashboard #routinebuilding #goalsetting #digitalplanning #notionsetup",
    },
    instagram: {
      caption: "Consistency is what creates real change. This Notion template helps you track habits, stay accountable and build routines that actually last. Simple tracking, powerful results.",
      hashtags: "#habittracker #notiontemplate #selfimprovement #dailyhabits #productivitytools #notiondashboard #routinebuilding #goalsetting #digitalplanning #notionsetup #personaldevelopment #wellbeing",
    },
    pinterest: {
      title: "Notion Habit Tracker Template for Daily Routines",
      description: "Track habits and build better routines with this simple Notion habit tracker.",
      keywords: "notion habit tracker,daily habits,routine planner,self improvement,productivity tools,notion dashboard,goal tracking,habit building",
    },
    gptImagePrompt: "notion habit tracker on laptop checklist view coffee minimal desk soft lighting clean aesthetic",
    videoPrompt: "Hook: habits not sticking. Show tracker. Show daily check-off. CTA: stay consistent.",
  },
  "notion-005": {
    etsy: {
      title: "Notion Reading Tracker Template Book Tracker Notion Library Dashboard Reading Log",
      description: "Organise your reading with a Notion book tracker designed to log books, track progress and manage your reading list. Perfect for building a consistent reading habit.",
      tags: "notion reading tracker,book tracker notion,reading log,notion dashboard,book organiser,reading planner,notion template,reading list,habit tracking,library tracker,productivity tools,notion setup,notion uk",
    },
    tiktok: {
      caption: "Buying books but never finishing them? This keeps you on track.",
      hashtags: "#readingtracker #notiontemplate #booklover #readinghabit #productivity #notiondashboard #booktok #digitalplanning #organisation #notionsetup",
    },
    instagram: {
      caption: "Reading becomes more enjoyable when it's organised. This Notion template helps you track books, set goals and build a consistent habit without pressure. Simple and motivating.",
      hashtags: "#readingtracker #bookloveruk #notiontemplate #readinghabit #productivitytools #notiondashboard #booktok #digitalplanning #organisationtools #notionsetup #readinggoals #selfgrowth",
    },
    pinterest: {
      title: "Notion Reading Tracker Template for Book Organisation",
      description: "Track books, reading progress and goals with this Notion reading dashboard.",
      keywords: "notion reading tracker,book tracker,reading log,reading habit,notion dashboard,book organiser,reading planner,notion template",
    },
    gptImagePrompt: "notion reading tracker on laptop books stacked coffee cosy desk soft lighting minimal aesthetic",
    videoPrompt: "Hook: unfinished books pile up. Show tracker. Show progress. CTA: stay consistent with reading.",
  },
  "notion-006": {
    etsy: {
      title: "Notion Project Management Template Freelancer Dashboard Task Manager Notion Template",
      description: "Manage projects with ease using a Notion project management template designed for freelancers. Track tasks, deadlines and clients in one organised system.",
      tags: "notion project manager,task manager notion,freelancer dashboard,project tracker,notion template,client management,productivity tools,task organisation,notion dashboard,workflow system,notion setup,freelancer tools,notion uk",
    },
    tiktok: {
      caption: "Too many tasks and no system? This organises everything.",
      hashtags: "#projectmanagement #notiontemplate #freelancerlife #productivity #taskmanagement #notiondashboard #workflow #organisation #digitalplanning #notionsetup",
    },
    instagram: {
      caption: "Running projects becomes easier when everything is in one place. This Notion template helps you manage tasks, deadlines and clients without feeling overwhelmed. Stay organised and in control.",
      hashtags: "#projectmanagement #notiontemplate #freelanceruk #productivitytools #taskmanagement #notiondashboard #workflow #organisationtools #digitalplanning #notionsetup #businesssystems #clientwork",
    },
    pinterest: {
      title: "Notion Project Management Template for Freelancers",
      description: "Organise tasks, projects and deadlines with this Notion project management dashboard.",
      keywords: "notion project management,task manager,freelancer tools,workflow system,productivity tools,notion dashboard,task tracking,project planner",
    },
    gptImagePrompt: "notion project dashboard on laptop task board view notebook coffee modern workspace clean aesthetic",
    videoPrompt: "Hook: too many tasks. Show dashboard. Show task organisation. CTA: manage projects better.",
  },
  "notion-007": {
    etsy: {
      title: "Notion Recipe Book Template Meal Planner Notion Recipe Organiser Cooking Planner",
      description: "Organise your meals and recipes with a Notion recipe book template designed for easy planning. Store recipes, plan meals and simplify your weekly food routine.",
      tags: "notion recipe template,meal planner notion,recipe organiser,notion dashboard,meal planning,food planner,notion template,cooking planner,recipe tracker,weekly meals,organisation tools,notion setup,notion uk",
    },
    tiktok: {
      caption: "Always wondering what to cook? This solves it.",
      hashtags: "#mealplanning #notiontemplate #recipebook #foodplanning #organisation #notiondashboard #homecooking #productivity #digitalplanning #notionsetup",
    },
    instagram: {
      caption: "Meal planning becomes easier when everything is organised. This Notion template helps you store recipes, plan meals and save time every week. Simple and practical.",
      hashtags: "#mealplanning #notiontemplate #recipebook #foodplanning #organisationtools #notiondashboard #homecooking #productivitytools #digitalplanning #notionsetup #weeklymeals #lifestyleplanning",
    },
    pinterest: {
      title: "Notion Recipe Book Template for Meal Planning",
      description: "Store recipes and plan meals easily with this Notion recipe organiser.",
      keywords: "notion recipe book,meal planner,food planning,recipe organiser,notion dashboard,weekly meals,cooking planner,notion template",
    },
    gptImagePrompt: "notion recipe book on laptop kitchen counter ingredients notebook clean minimal aesthetic soft lighting",
    videoPrompt: "Hook: no meal plan. Show recipe dashboard. Show planning. CTA: simplify your meals.",
  },
  "notion-008": {
    etsy: {
      title: "Notion Job Application Tracker Template Career Planner Job Search Dashboard",
      description: "Stay organised during your job search with a Notion job application tracker. Track applications, interviews and follow-ups in one simple and structured system.",
      tags: "notion job tracker,job application tracker,career planner,job search organiser,notion template,application tracker,interview tracker,career tools,notion dashboard,job search tools,organisation tools,notion setup,notion uk",
    },
    tiktok: {
      caption: "Applying for jobs but losing track? This keeps everything organised.",
      hashtags: "#jobsearch #notiontemplate #careerplanning #productivity #jobtracker #notiondashboard #organisation #digitalplanning #careertips #notionsetup",
    },
    instagram: {
      caption: "Job searching becomes less stressful when everything is organised. This template helps you track applications, interviews and follow-ups in one place. Stay focused and in control.",
      hashtags: "#jobsearch #notiontemplate #careerplanning #productivitytools #jobtracker #notiondashboard #organisationtools #digitalplanning #careertips #notionsetup #jobhunt #careergoals",
    },
    pinterest: {
      title: "Notion Job Application Tracker Template for Career Planning",
      description: "Track job applications, interviews and progress with this Notion dashboard.",
      keywords: "job tracker notion,job application tracker,career planning,job search organiser,notion template,interview tracker,career tools,notion dashboard",
    },
    gptImagePrompt: "notion job tracker on laptop notebook pen coffee clean desk setup minimal aesthetic",
    videoPrompt: "Hook: losing track of job applications. Show tracker. Show organisation. CTA: stay on top of your search.",
  },
  "notion-009": {
    etsy: {
      title: "Notion Travel Planner Template Trip Planner Notion Itinerary Dashboard Travel Organiser",
      description: "Plan your trips with ease using a Notion travel planner designed to organise itineraries, bookings and budgets. Keep everything in one place for stress-free travel.",
      tags: "notion travel planner,trip planner notion,itinerary planner,travel organiser,notion template,travel dashboard,holiday planning,trip organiser,travel budget,notion setup,organisation tools,travel planning,notion uk",
    },
    tiktok: {
      caption: "Travel planning feels overwhelming? This organises everything.",
      hashtags: "#travelplanning #notiontemplate #tripplanner #organisation #traveltools #notiondashboard #holidayplanning #productivity #digitalplanning #notionsetup",
    },
    instagram: {
      caption: "Planning trips becomes easier when everything is in one place. This Notion template helps you organise itineraries, bookings and budgets so you can focus on enjoying your trip.",
      hashtags: "#travelplanning #notiontemplate #tripplanner #organisationtools #traveltools #notiondashboard #holidayplanning #productivitytools #digitalplanning #notionsetup #travelorganisation #lifestyleplanning",
    },
    pinterest: {
      title: "Notion Travel Planner Template for Trip Organisation",
      description: "Organise itineraries, bookings and budgets with this Notion travel planner.",
      keywords: "notion travel planner,trip planner,itinerary planner,travel organiser,holiday planning,notion dashboard,travel tools,trip organisation",
    },
    gptImagePrompt: "notion travel planner on laptop passport sunglasses coffee minimal desk travel aesthetic soft lighting",
    videoPrompt: "Hook: messy travel plans. Show planner. Show itinerary. CTA: plan your trips easily.",
  },
  "notion-010": {
    etsy: {
      title: "Notion CRM Template Small Business CRM Client Tracker Notion Dashboard Sales Tracker",
      description: "Manage your clients with a Notion CRM template designed for small businesses. Track leads, clients and sales in one organised system to improve workflow and growth.",
      tags: "notion crm template,client tracker notion,small business crm,sales tracker,notion dashboard,lead tracker,business tools,client management,notion template,workflow system,organisation tools,notion setup,notion uk",
    },
    tiktok: {
      caption: "Losing track of clients and leads? This fixes your system.",
      hashtags: "#crm #notiontemplate #smallbusinessuk #clientmanagement #salestracker #notiondashboard #organisation #businesssystems #productivity #notionsetup",
    },
    instagram: {
      caption: "Managing clients becomes simple when you have the right system. This Notion CRM helps you track leads, organise contacts and stay on top of your business growth. Clear and effective.",
      hashtags: "#crm #notiontemplate #smallbusinessuk #clientmanagement #salestracker #notiondashboard #organisationtools #businesssystems #productivitytools #notionsetup #businessgrowth #entrepreneuruk",
    },
    pinterest: {
      title: "Notion CRM Template for Small Business Client Management",
      description: "Track leads, clients and sales with this easy-to-use Notion CRM dashboard.",
      keywords: "notion crm,client tracker,sales tracker,small business tools,notion dashboard,lead management,workflow system,business organisation",
    },
    gptImagePrompt: "notion crm dashboard on laptop business desk notebook coffee clean minimal aesthetic soft lighting",
    videoPrompt: "Hook: losing track of clients. Show CRM dashboard. Show organisation. CTA: manage your business better.",
  },
  "asset-001": {
    etsy: {
      title: "Lightroom Presets Pack Mobile Desktop Presets Photo Editing Presets Instagram Aesthetic",
      description: "Transform your photos instantly with professional Lightroom presets designed for mobile and desktop editing. Perfect for creating a consistent, polished aesthetic for social media, photography or branding.",
      tags: "lightroom presets,mobile presets,photo editing presets,instagram presets,lightroom mobile,photo filters,editing tools,photography presets,content creator tools,branding aesthetic,lightroom pack,photo editing,filter presets",
    },
    tiktok: {
      caption: "Your photos look flat? These presets fix it instantly.",
      hashtags: "#lightroompresets #photoediting #contentcreator #instagramaesthetic #editingtools #photographytips #socialmediagrowth #digitalproducts #creativetools #aesthetic",
    },
    instagram: {
      caption: "A consistent aesthetic makes all the difference. These presets help you transform your photos in seconds while keeping your content clean, cohesive and professional. Perfect for creators and brands.",
      hashtags: "#lightroompresets #photoediting #contentcreatoruk #instagramaesthetic #editingtools #photographytips #socialmediagrowth #digitalproducts #creativetools #brandinguk #aestheticfeed #contentcreation",
    },
    pinterest: {
      title: "Lightroom Presets Pack for Instagram Aesthetic and Photo Editing",
      description: "Professional presets to enhance photos and create a consistent aesthetic for social media and branding.",
      keywords: "lightroom presets,photo editing,instagram aesthetic,mobile presets,photography tools,editing filters,content creator tools,aesthetic photos",
    },
    gptImagePrompt: "before and after photo editing comparison lightroom presets applied neutral tones minimal layout modern aesthetic soft lighting",
    videoPrompt: "Hook: photos look dull. Show before and after. Show preset application. CTA: upgrade your photos instantly.",
  },
  "asset-002": {
    etsy: {
      title: "Procreate Brush Set Digital Brushes Drawing Brushes Illustration Brushes Procreate Pack",
      description: "Create stunning artwork with a professional Procreate brush set designed for illustration and digital drawing. Perfect for artists looking to enhance texture, detail and creativity in their work.",
      tags: "procreate brushes,digital brushes,illustration brushes,procreate pack,drawing tools,artist tools,digital art brushes,texture brushes,creative tools,procreate art,design resources,brush set,ipad drawing",
    },
    tiktok: {
      caption: "Your digital art feels flat? These brushes change everything.",
      hashtags: "#procreatebrushes #digitalart #illustrationtools #artistlife #creativeprocess #drawingtools #ipadart #designresources #digitalproducts #arttips",
    },
    instagram: {
      caption: "The right tools can completely change your artwork. These brushes add texture, depth and flow to your designs, making it easier to create something that feels professional and unique.",
      hashtags: "#procreatebrushes #digitalartuk #illustrationtools #artistlife #creativeprocess #drawingtools #ipadart #designresources #digitalproducts #arttips #creativeuk #designinspiration",
    },
    pinterest: {
      title: "Procreate Brush Set for Digital Illustration and Drawing",
      description: "High-quality Procreate brushes to improve texture, detail and creativity in digital art.",
      keywords: "procreate brushes,digital art tools,illustration brushes,ipad drawing,creative tools,artist resources,design tools,brush pack",
    },
    gptImagePrompt: "ipad with procreate open stylus pen brush strokes on screen creative workspace soft lighting modern artist setup",
    videoPrompt: "Hook: art feels flat. Show brush strokes. Show texture. CTA: upgrade your brushes.",
  },
  "asset-003": {
    etsy: {
      title: "Procreate Colour Palette Pack Colour Palettes Digital Colour Swatches Aesthetic Colours",
      description: "Enhance your designs with curated Procreate colour palettes designed for modern aesthetics. Perfect for artists, designers and creators looking to build cohesive and visually appealing work.",
      tags: "procreate palette,colour palette pack,digital colours,design colours,procreate tools,colour swatches,branding colours,creative tools,design resources,colour inspiration,aesthetic colours,artist tools,colour palette",
    },
    tiktok: {
      caption: "Your colours don't match? This fixes your palette instantly.",
      hashtags: "#colourpalette #procreatepalette #designinspo #creativeprocess #artisttools #brandingdesign #colourtheory #digitalart #designresources #aesthetic",
    },
    instagram: {
      caption: "Colour can completely change how your work feels. These palettes help you create cohesive, professional designs without guessing. Simple, effective and ready to use.",
      hashtags: "#colourpalette #designinspo #creativeprocess #artisttools #brandingdesign #colourtheory #digitalart #designresources #aesthetic #creativeuk #designinspiration #visualdesign",
    },
    pinterest: {
      title: "Procreate Colour Palette Pack for Designers and Artists",
      description: "Curated colour palettes to create cohesive and visually appealing designs.",
      keywords: "colour palette,procreate palette,design colours,colour inspiration,branding colours,creative tools,digital design,artist resources",
    },
    gptImagePrompt: "colour palette swatches displayed on ipad soft tones design workspace minimal aesthetic clean layout",
    videoPrompt: "Hook: colours don't work together. Show palette. Show design. CTA: improve your colour choices.",
  },
  "asset-004": {
    etsy: {
      title: "Stock Photo Bundle Neutral Aesthetic Photos Small Business Branding Photos Bundle",
      description: "Elevate your brand with a curated stock photo bundle designed for small businesses and content creators. Perfect for creating a cohesive, professional and modern visual identity.",
      tags: "stock photos bundle,branding photos,neutral aesthetic photos,business photos,content creator photos,instagram content,photo bundle,branding kit,small business tools,visual branding,photo resources,aesthetic images,content bundle",
    },
    tiktok: {
      caption: "Struggling to find content for your posts? This solves it.",
      hashtags: "#stockphotos #brandingcontent #smallbusinessuk #contentcreation #instagramcontent #visualbranding #digitalproducts #contentcreator #aesthetic #marketingtools",
    },
    instagram: {
      caption: "Your visuals shape how people see your brand. This bundle gives you clean, cohesive photos you can use across your content instantly. No more scrambling for images.",
      hashtags: "#stockphotos #brandingcontent #smallbusinessuk #contentcreation #instagramcontent #visualbranding #digitalproducts #contentcreator #aesthetic #marketingtools #brandidentity #onlinebusinessuk",
    },
    pinterest: {
      title: "Stock Photo Bundle for Small Business Branding and Content",
      description: "Neutral aesthetic stock photos to elevate your brand and create cohesive content.",
      keywords: "stock photos,branding photos,content creation,small business tools,visual branding,aesthetic photos,instagram content,photo bundle",
    },
    gptImagePrompt: "neutral aesthetic stock photos displayed on laptop coffee minimal desk soft lighting modern branding aesthetic",
    videoPrompt: "Hook: no content ideas. Show stock photos. Show usage. CTA: upgrade your visuals.",
  },
  "asset-005": {
    etsy: {
      title: "Product Mockup Templates Canva Mockups Product Display Templates Branding Mockups",
      description: "Showcase your products professionally with editable mockup templates designed for branding and marketing. Perfect for creating polished visuals without photography.",
      tags: "product mockup,canva mockups,branding mockups,product display,marketing templates,visual branding,product presentation,canva templates,design tools,small business tools,mockup bundle,content creation,branding kit",
    },
    tiktok: {
      caption: "Your product photos look basic? This upgrades them instantly.",
      hashtags: "#mockups #productphotos #brandinguk #smallbusinessuk #canvatemplates #contentcreation #visualbranding #digitalproducts #designtools #marketingtips",
    },
    instagram: {
      caption: "How you present your product matters. These mockups help you create clean, professional visuals that instantly elevate your brand. No photography needed.",
      hashtags: "#mockups #productphotos #brandinguk #smallbusinessuk #canvatemplates #contentcreation #visualbranding #digitalproducts #designtools #marketingtips #brandidentity #onlinebusinessuk",
    },
    pinterest: {
      title: "Product Mockup Templates for Branding and Marketing",
      description: "Editable mockups to showcase your products professionally without photography.",
      keywords: "product mockups,canva mockups,branding templates,product display,visual branding,marketing tools,design resources,content creation",
    },
    gptImagePrompt: "product mockup scene on laptop neutral desk minimal layout clean branding soft lighting modern aesthetic",
    videoPrompt: "Hook: product photos look basic. Show mockup. Show transformation. CTA: upgrade your visuals.",
  },
  "asset-006": {
    etsy: {
      title: "Canva Element Pack Design Elements Icons Shapes Branding Graphics Bundle",
      description: "Create standout designs with a Canva element pack featuring icons, shapes and graphics. Perfect for branding, social media and creative projects.",
      tags: "canva elements,design elements pack,branding graphics,icons pack,shapes bundle,canva graphics,design resources,creative tools,social media design,branding kit,visual elements,graphic pack,design tools",
    },
    tiktok: {
      caption: "Your designs feel empty? These elements fix it instantly.",
      hashtags: "#canvadesign #designresources #brandinggraphics #contentcreation #creativeprocess #designtools #visualdesign #digitalproducts #aesthetic #graphicdesign",
    },
    instagram: {
      caption: "Great design is all about the details. These elements help you create more polished, engaging visuals without starting from scratch. Perfect for elevating your content.",
      hashtags: "#canvadesign #designresources #brandinggraphics #contentcreation #creativeprocess #designtools #visualdesign #digitalproducts #aesthetic #graphicdesign #creativeuk #designinspiration",
    },
    pinterest: {
      title: "Canva Element Pack for Branding and Social Media Design",
      description: "Design elements, icons and shapes to elevate your Canva projects and branding.",
      keywords: "canva elements,design resources,branding graphics,icons pack,creative tools,social media design,visual elements,graphic design",
    },
    gptImagePrompt: "design elements displayed on screen icons shapes layouts clean minimal workspace soft lighting modern aesthetic",
    videoPrompt: "Hook: designs feel empty. Show elements. Show improved design. CTA: upgrade your designs.",
  },
  "asset-007": {
    etsy: {
      title: "Font Pairing Guide Typography Guide Branding Fonts Canva Fonts Design Resource",
      description: "Create beautiful designs with a font pairing guide designed to help you choose the perfect combinations. Ideal for branding, social media and creative projects.",
      tags: "font pairing guide,typography guide,branding fonts,design fonts,canva fonts,font combinations,design resources,creative tools,branding design,typography tips,visual design,font guide,design tools",
    },
    tiktok: {
      caption: "Fonts not looking right together? This solves it instantly.",
      hashtags: "#fontpairing #typography #designtips #brandingdesign #canvadesign #creativeprocess #designtools #visualdesign #digitalproducts #aesthetic",
    },
    instagram: {
      caption: "Typography can make or break your design. This guide helps you choose font pairings that feel balanced, professional and visually appealing. No more guessing.",
      hashtags: "#fontpairing #typography #designtips #brandingdesign #canvadesign #creativeprocess #designtools #visualdesign #digitalproducts #aesthetic #designinspiration #creativeuk",
    },
    pinterest: {
      title: "Font Pairing Guide for Branding and Graphic Design",
      description: "Typography guide to help you choose perfect font combinations for your designs.",
      keywords: "font pairing,typography guide,branding fonts,design fonts,canva fonts,creative tools,visual design,design resources",
    },
    gptImagePrompt: "font pairing examples on screen typography layouts clean minimal workspace soft lighting modern design aesthetic",
    videoPrompt: "Hook: fonts look wrong together. Show pairings. Show improvement. CTA: fix your typography.",
  },
  "asset-008": {
    etsy: {
      title: "Texture and Background Pack Digital Backgrounds Aesthetic Textures Design Resources",
      description: "Enhance your designs with a texture and background pack featuring modern, aesthetic styles. Perfect for branding, social media and creative design projects.",
      tags: "texture pack,background pack,digital textures,design backgrounds,aesthetic textures,branding resources,design tools,creative assets,graphic design,social media design,visual elements,design pack,texture bundle",
    },
    tiktok: {
      caption: "Your designs look flat? These textures fix that instantly.",
      hashtags: "#textures #designresources #graphicdesign #brandingdesign #creativeprocess #designtools #visualdesign #digitalproducts #aesthetic #contentcreation",
    },
    instagram: {
      caption: "Adding texture can completely transform your designs. This pack helps you create depth, interest and a more polished look without extra effort. Perfect for any creative project.",
      hashtags: "#textures #designresources #graphicdesign #brandingdesign #creativeprocess #designtools #visualdesign #digitalproducts #aesthetic #contentcreation #designinspiration #creativeuk",
    },
    pinterest: {
      title: "Texture and Background Pack for Graphic Design and Branding",
      description: "Aesthetic textures and backgrounds to add depth and style to your designs.",
      keywords: "texture pack,backgrounds,design textures,graphic design,branding resources,creative assets,visual elements,design tools",
    },
    gptImagePrompt: "texture backgrounds displayed on screen layered designs minimal workspace soft lighting modern aesthetic",
    videoPrompt: "Hook: designs feel flat. Show textures. Show depth. CTA: improve your visuals.",
  },
  "asset-009": {
    etsy: {
      title: "Icon Set Pack Website Icons App Icons UI Icons Minimal Icon Pack Digital Icons",
      description: "Upgrade your designs with a clean, modern icon set perfect for websites, apps and branding. Designed to create consistency and clarity across your visuals.",
      tags: "icon pack,website icons,app icons,ui icons,design icons,minimal icons,branding icons,design resources,creative tools,graphic elements,ui design,icon set,digital icons",
    },
    tiktok: {
      caption: "Your designs feel inconsistent? These icons fix it.",
      hashtags: "#iconpack #uidesign #graphicdesign #brandingdesign #designresources #creativeprocess #designtools #visualdesign #digitalproducts #aesthetic",
    },
    instagram: {
      caption: "Consistency is key in design. This icon set helps you create clean, professional visuals that feel cohesive across every platform. Simple details that elevate everything.",
      hashtags: "#iconpack #uidesign #graphicdesign #brandingdesign #designresources #creativeprocess #designtools #visualdesign #digitalproducts #aesthetic #designinspiration #creativeuk",
    },
    pinterest: {
      title: "Minimal Icon Set for Websites, Apps and Branding",
      description: "Clean icon pack to create consistent and professional design across projects.",
      keywords: "icon pack,ui icons,website icons,app icons,design resources,branding icons,graphic elements,visual design",
    },
    gptImagePrompt: "icon set displayed on screen minimal grid layout clean workspace soft lighting modern aesthetic",
    videoPrompt: "Hook: inconsistent design. Show icons. Show improved layout. CTA: upgrade your visuals.",
  },
  "asset-010": {
    etsy: {
      title: "Seamless Pattern Designs Pattern Pack Repeat Patterns Digital Patterns Branding Textures",
      description: "Create standout designs with a seamless pattern pack perfect for branding, packaging and digital projects. Easy to use and designed for a clean, modern aesthetic.",
      tags: "pattern pack,seamless patterns,digital patterns,branding patterns,repeat patterns,design resources,creative assets,graphic design,pattern design,background patterns,visual design,pattern bundle,design tools",
    },
    tiktok: {
      caption: "Your designs look plain? These patterns change everything.",
      hashtags: "#patternpack #graphicdesign #brandingdesign #designresources #creativeprocess #designtools #visualdesign #digitalproducts #aesthetic #contentcreation",
    },
    instagram: {
      caption: "Patterns add personality and depth to your designs. This pack helps you create visually interesting, professional layouts without overcomplicating your workflow. Perfect for branding and packaging.",
      hashtags: "#patternpack #graphicdesign #brandingdesign #designresources #creativeprocess #designtools #visualdesign #digitalproducts #aesthetic #contentcreation #designinspiration #creativeuk",
    },
    pinterest: {
      title: "Seamless Pattern Pack for Branding and Graphic Design",
      description: "Repeat pattern designs to add depth and personality to your creative projects.",
      keywords: "pattern pack,seamless patterns,design resources,branding patterns,graphic design,creative assets,visual design,background patterns",
    },
    gptImagePrompt: "seamless patterns displayed on screen repeating designs minimal workspace soft lighting modern aesthetic",
    videoPrompt: "Hook: designs look plain. Show patterns. Show transformation. CTA: upgrade your designs.",
  },
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
