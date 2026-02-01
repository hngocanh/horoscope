// 12 Zodiac Signs with symbols and dates
const zodiacSigns = [
  { id: 'aries', symbol: '♈', name: 'Aries', dates: 'Mar 21 - Apr 19' },
  { id: 'taurus', symbol: '♉', name: 'Taurus', dates: 'Apr 20 - May 20' },
  { id: 'gemini', symbol: '♊', name: 'Gemini', dates: 'May 21 - Jun 20' },
  { id: 'cancer', symbol: '♋', name: 'Cancer', dates: 'Jun 21 - Jul 22' },
  { id: 'leo', symbol: '♌', name: 'Leo', dates: 'Jul 23 - Aug 22' },
  { id: 'virgo', symbol: '♍', name: 'Virgo', dates: 'Aug 23 - Sep 22' },
  { id: 'libra', symbol: '♎', name: 'Libra', dates: 'Sep 23 - Oct 22' },
  { id: 'scorpio', symbol: '♏', name: 'Scorpio', dates: 'Oct 23 - Nov 21' },
  { id: 'sagittarius', symbol: '♐', name: 'Sagittarius', dates: 'Nov 22 - Dec 21' },
  { id: 'capricorn', symbol: '♑', name: 'Capricorn', dates: 'Dec 22 - Jan 19' },
  { id: 'aquarius', symbol: '♒', name: 'Aquarius', dates: 'Jan 20 - Feb 18' },
  { id: 'pisces', symbol: '♓', name: 'Pisces', dates: 'Feb 19 - Mar 20' }
];

// Lucky Colors
const luckyColors = [
  'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange',
  'Pink', 'White', 'Black', 'Gold', 'Silver', 'Cyan',
  'Brown', 'Lavender', 'Turquoise', 'Coral', 'Indigo', 'Emerald'
];

// Lucky Times
const luckyTimes = ['Morning', 'Afternoon', 'Evening', 'Night'];

// Horoscope Content Templates (6-8 variations per type per sign)
const horoscopeContent = {
  daily: {
    aries: [
      "Today brings exciting new opportunities your way. Trust your instincts and take that leap of faith you've been considering.",
      "Your energy levels are high today. Use this momentum to tackle that project you've been putting off.",
      "A surprise encounter could lead to a valuable connection. Stay open to meeting new people.",
      "Focus on balance today. Your ambition is admirable, but don't neglect your personal relationships.",
      "The stars favor bold moves today. If you've been waiting for a sign, this is it.",
      "Take time for self-reflection. The answers you seek are within you.",
      "Financial matters look promising today. Review your budget and make smart decisions.",
      "Your creativity is at its peak. Express yourself freely and don't hold back."
    ],
    taurus: [
      "Stability and comfort are your themes today. Create a peaceful environment around you.",
      "Financial matters are highlighted. A prudent approach to money matters will serve you well.",
      "Romance is in the air. Express your feelings to someone special.",
      "Your patience will be rewarded today. Good things come to those who wait.",
      "Treat yourself today. You've earned some relaxation and pampering.",
      "A practical solution to a lingering problem presents itself. Trust your judgment.",
      "Your grounded nature helps others today. Be the steady presence someone needs.",
      "Beauty and harmony surround you. Take time to appreciate the simple pleasures."
    ],
    gemini: [
      "Communication is your superpower today. Reach out and reconnect with old friends.",
      "Your curious nature leads you to interesting discoveries. Follow that intellectual spark.",
      "Multiple opportunities present themselves. Choose the one that excites you most.",
      "A fascinating conversation could change your perspective on something important.",
      "Adaptability is key today. Go with the flow and see where it takes you.",
      "Social invitations are abundant. Pick and choose the ones that truly matter to you.",
      "Your wit and charm are especially magnetic. Use them to brighten someone's day.",
      "Information comes your way that could be valuable. Pay attention to details."
    ],
    cancer: [
      "Home and family are your focus today. Create warmth and comfort for your loved ones.",
      "Your intuition is especially strong. Trust those gut feelings about people and situations.",
      "Emotional healing is possible today. Let go of past hurts and embrace forgiveness.",
      "Nurturing others comes naturally to you, but remember to care for yourself too.",
      "A family matter may need attention. Approach it with patience and understanding.",
      "Your home becomes a sanctuary today. Make improvements that bring you joy.",
      "Memories surface today, offering clarity about current situations.",
      "Vulnerable conversations lead to deeper connections. Be brave and open up."
    ],
    leo: [
      "Step into the spotlight today. Your charisma is magnetic and others are drawn to you.",
      "Creative projects flourish under today's cosmic energy. Express your authentic self.",
      "Your generosity is appreciated. Share your abundance with others.",
      "Leadership opportunities arise. Take charge and inspire those around you.",
      "Romance and passion are highlighted. Make your feelings known.",
      "Your confidence soars today. Use this energy to pursue your dreams.",
      "Recognition for your hard work is coming. Stay humble and grateful.",
      "Children or creative pursuits bring joy. Embrace your playful side."
    ],
    virgo: [
      "Your analytical skills are sharp today. Tackle complex problems with ease.",
      "Health and wellness are in focus. Small positive changes make a big difference.",
      "Organization brings clarity. Declutter your space and your mind will follow.",
      "A detail you overlooked becomes important. Pay attention to the finer points.",
      "Your helpful nature is appreciated. Support others while maintaining your boundaries.",
      "Work matters progress smoothly. Your dedication does not go unnoticed.",
      "Self-improvement is favored. Learn a new skill or refine an existing one.",
      "Practical solutions present themselves. Trust your methodical approach."
    ],
    libra: [
      "Harmony and balance are your goals today. Seek equilibrium in all areas of life.",
      "Partnerships are highlighted. Collaborations bring success and satisfaction.",
      "Your diplomatic skills are needed. Help others find common ground.",
      "Beauty and aesthetics capture your attention. Surround yourself with art and elegance.",
      "A relationship reaches a new level of understanding. Communicate openly.",
      "Justice and fairness matter to you today. Stand up for what's right.",
      "Social activities bring joy. Connect with those who uplift and inspire you.",
      "Indecision may plague you. Trust your heart and make a choice."
    ],
    scorpio: [
      "Your intensity is your power today. Use it to transform situations for the better.",
      "Hidden truths come to light. Knowledge is power in current situations.",
      "Deep connections are formed today. Vulnerability leads to intimacy.",
      "Financial matters improve. Research thoroughly before making decisions.",
      "Your intuition is spot on. Trust those psychic-like hunches.",
      "Let go of what no longer serves you. Release brings renewal.",
      "Passion runs high today. Channel this energy into creative pursuits.",
      "Mysteries fascinate you. Dig deeper to uncover what's beneath the surface."
    ],
    sagittarius: [
      "Adventure calls to you. Step out of your comfort zone and explore new territories.",
      "Your optimism is contagious. Spread positivity wherever you go.",
      "Learning opportunities abound. Expand your horizons through education or travel.",
      "Philosophy and higher meaning intrigue you today. Contemplate life's big questions.",
      "Freedom is essential for your well-being. Release any constraints holding you back.",
      "A long-distance connection brings news. Stay open to global perspectives.",
      "Your honesty is refreshing, but consider timing and tact in delivery.",
      "Physical activity boosts your mood. Get moving and embrace your adventurous spirit."
    ],
    capricorn: [
      "Your ambition drives you forward. Set achievable goals and work steadily toward them.",
      "Career advancement is highlighted. Professional opportunities arise.",
      "Traditional approaches work best today. Honor time-tested methods.",
      "Your reputation precedes you. Maintain your integrity in all dealings.",
      "Financial security is within reach. Make smart, long-term investments.",
      "Responsibilities may feel heavy, but you're equipped to handle them.",
      "Mentorship is favorable. Either find a guide or share your wisdom.",
      "Patience and persistence pay off. Stay the course despite obstacles."
    ],
    aquarius: [
      "Innovation is your theme today. Think outside conventional boundaries.",
      "Humanitarian causes call to you. Use your unique perspective to help others.",
      "Social connections bring surprising insights. Network with intention.",
      "Technology and the future fascinate you. Embrace forward-thinking ideas.",
      "Your independence is celebrated. March to your own unique beat.",
      "Group activities bring success. Your vision inspires collective action.",
      "Unexpected changes bring growth. Adaptability is your strength.",
      "Friendship takes center stage. Nurture the bonds that matter most."
    ],
    pisces: [
      "Your dreams hold important messages. Pay attention to symbols and feelings.",
      "Compassion flows freely today. Offer kindness to all who cross your path.",
      "Creative inspiration strikes. Capture those fleeting artistic ideas.",
      "Spiritual insights deepen your understanding. Connect with your inner wisdom.",
      "Escapism tempts you, but facing reality brings true liberation.",
      "Your sensitivity is a gift, not a weakness. Use it to understand others.",
      "Artistic and musical pursuits bring fulfillment. Lose yourself in creation.",
      "Boundaries are important. Give freely, but protect your energy reserves."
    ]
  },
  money: {
    aries: [
      "A financial opportunity arrives unexpectedly. Act quickly but carefully.",
      "Your bold approach to money matters pays off today. Take calculated risks.",
      "Review your spending habits. Small adjustments can lead to significant savings.",
      "Investment opportunities look promising. Do your research before committing.",
      "A raise or bonus is possible. Make your value known at work.",
      "Someone offers financial advice. Listen, but trust your own judgment.",
      "Impulse purchases are tempting. Wait 24 hours before buying.",
      "Your entrepreneurial spirit is high. Consider starting a side business."
    ],
    taurus: [
      "Financial stability is your priority. Build a solid foundation today.",
      "Practical investments serve you well. Long-term thinking brings security.",
      "Treat yourself within reason. Balance saving with enjoying life's pleasures.",
      "Real estate matters are favorable. Property decisions made today are sound.",
      "Your patience with money matters is rewarded. Slow and steady wins.",
      "A deal presents itself. Negotiate terms that favor your long-term interests.",
      "Budgeting brings peace of mind. Create or review your financial plan.",
      "Material gains are possible. Remember that true wealth includes relationships."
    ],
    gemini: [
      "Multiple income streams appeal to you. Diversification strengthens finances.",
      "Information about financial opportunities comes your way. Research thoroughly.",
      "Short-term investments look favorable. Quick wins boost your confidence.",
      "Your quick thinking helps you spot money-saving opportunities.",
      "A conversation about money reveals valuable insights. Ask the right questions.",
      "Consider gig work or freelance opportunities. Your versatility is an asset.",
      "Financial news affects your plans. Stay informed but avoid reactive decisions.",
      "Communication skills can increase your income. Pitch yourself boldly."
    ],
    cancer: [
      "Home-related expenses may arise. Budget for household improvements.",
      "Family financial matters need attention. Lead with care and practicality.",
      "Security is your financial motivation. Save for peace of mind.",
      "Emotional spending may tempt you. Distinguish needs from wants.",
      "Investments related to real estate or home prove beneficial.",
      "Your intuition about money is strong. Trust those gut feelings.",
      "Planning for your family's future brings satisfaction. Review insurance and savings.",
      "Financial decisions made from the heart need practical checks."
    ],
    leo: [
      "Your charisma attracts financial opportunities. Present your ideas confidently.",
      "Generosity is admirable, but set boundaries. Give within your means.",
      "Creative pursuits can become profitable. Monetize your talents.",
      "A leadership position brings financial rewards. Step up when opportunity knocks.",
      "Luxury tempts you. Invest in quality items that retain value.",
      "Your bold financial approach may pay off. Calculate risks carefully.",
      "Recognition at work leads to compensation. Make your achievements visible.",
      "Romantic and financial matters intersect. Discuss money with partners openly."
    ],
    virgo: [
      "Detailed financial review reveals savings opportunities. Analyze your statements.",
      "Your practical approach to money serves you well. Stick to proven methods.",
      "Health investments pay dividends. Preventative care saves money long-term.",
      "Organize your financial documents. Clarity leads to better decisions.",
      "Small, consistent savings accumulate significantly. Start an automatic transfer.",
      "Work-related finances improve. Your efficiency is noticed and rewarded.",
      "Comparison shopping saves money. Research before making purchases.",
      "Your analytical skills help spot investment gems. Research thoroughly."
    ],
    libra: [
      "Partnership finances need attention. Discuss shared resources openly.",
      "Balance your budget between saving and spending. Harmony is key.",
      "A financial decision affects relationships. Consider all perspectives.",
      "Investments in art or beauty appreciate over time. Collect thoughtfully.",
      "Negotiation skills improve financial outcomes. Advocate for fair compensation.",
      "Joint ventures look promising. Collaborate for mutual benefit.",
      "Social connections lead to opportunities. Network strategically.",
      "Your aesthetic taste can be monetized. Consider design-related ventures."
    ],
    scorpio: [
      "Deep financial research reveals hidden opportunities. Look beneath the surface.",
      "Transformation of your financial situation is possible. Release old patterns.",
      "Inheritance or shared money matters arise. Handle with transparency.",
      "Your intensity in financial matters yields results. Focus your energy.",
      "Eliminate debt aggressively. Freedom from obligations empowers you.",
      "Investment research pays off. Understand before you commit.",
      "Financial secrets may come to light. Face them with courage.",
      "Passion for financial goals drives success. Commit fully to your plan."
    ],
    sagittarius: [
      "Travel-related expenses are worth it. Experiences become valuable memories.",
      "International financial opportunities appear. Expand your horizons.",
      "Optimism helps you take calculated risks. Assess before you leap.",
      "Education investments yield long-term returns. Learn and grow.",
      "Publishing or media ventures show promise. Share your wisdom broadly.",
      "Financial freedom is your ultimate goal. Work toward passive income.",
      "Speculative investments tempt you. Keep risky money separate from core savings.",
      "Your broad perspective helps spot emerging trends. Look ahead."
    ],
    capricorn: [
      "Career advancement boosts finances. Professional recognition brings rewards.",
      "Long-term financial planning is favored. Set goals for retirement.",
      "Traditional investments serve you well. Blue-chip stocks and bonds offer stability.",
      "Your reputation leads to financial opportunities. Maintain integrity.",
      "Building wealth requires patience. Stay the course despite market fluctuations.",
      "Real estate investments look solid. Property provides security and appreciation.",
      "Financial authority figures offer guidance. Seek mentorship from the experienced.",
      "Your discipline in money matters pays off. Stick to your plan."
    ],
    aquarius: [
      "Innovative financial technologies catch your eye. Research crypto or new platforms carefully.",
      "Humanitarian investments align with your values. Impact investing appeals to you.",
      "Group financial ventures show promise. Collective power achieves goals.",
      "Unexpected money arrives. Use it wisely to advance your goals.",
      "Technology investments may yield high returns. Assess risk carefully.",
      "Your unique perspective identifies unconventional opportunities.",
      "Financial freedom comes from automation. Set systems to work for you.",
      "Networking leads to financial insights. Connect with forward-thinking people."
    ],
    pisces: [
      "Your financial intuition is strong today. Trust those subtle signals.",
      "Creative projects generate income. Monetize your artistic talents.",
      "Charitable giving feels right. Generosity returns in unexpected ways.",
      "Dream big about financial goals. Visualization attracts abundance.",
      "Avoid lending money without clear agreements. Boundaries protect relationships.",
      "Investments related to water or healing industries appeal to you.",
      "Financial confusion clears when you trust your feelings. Listen to your gut.",
      "Compassionate spending aligns with your values. Support causes you believe in."
    ]
  },
  love: {
    aries: [
      "Your passion is magnetic today. Let that fire burn brightly for someone special.",
      "Single? You're likely to turn heads. Make the first move with confidence.",
      "Couples benefit from shared adventures. Try something new together.",
      "Your directness in romance is appreciated. Say what you feel.",
      "A chance encounter sparks romance. Stay open to unexpected connections.",
      "Competitive energy in relationships transforms into passion. Channel it wisely.",
      "Your independence attracts admirers. Be yourself, unapologetically.",
      "Romance requires courage today. Take a risk on love."
    ],
    taurus: [
      "Sensual pleasures enhance romance. Create a beautiful setting for love.",
      "Your steady nature provides security to your partner. Show up consistently.",
      "Shared meals strengthen bonds. Cooking together brings intimacy.",
      "Physical touch is especially meaningful today. Express affection physically.",
      "Patient pursuit of romance pays off. Slow and steady wins hearts.",
      "Beauty and romance intertwine. Surround yourself with elegance and love.",
      "Financial harmony in relationships matters. Discuss money with love.",
      "Your loyalty is your most attractive quality. Commitment deepens connections."
    ],
    gemini: [
      "Conversation leads to romance. Intellectual connection sparks attraction.",
      "Flirting comes naturally today. Your wit and charm are irresistible.",
      "Variety keeps romance fresh. Surprise your partner with something unexpected.",
      "Communication is the key to relationship harmony. Speak from the heart.",
      "Social events may lead to romantic encounters. Mingle with intention.",
      "Your curiosity about your partner deepens your bond. Ask meaningful questions.",
      "Playfulness keeps love alive. Don't take things too seriously today.",
      "Words of affirmation mean everything. Express love verbally and often."
    ],
    cancer: [
      "Emotional vulnerability creates intimacy. Share your deepest feelings.",
      "Home is where the heart is. Create domestic bliss with your loved one.",
      "Nurturing your partner strengthens your bond. Show care in practical ways.",
      "Family approval matters to your relationship. Introduce your partner warmly.",
      "Sentimental gestures touch the heart. Share memories and create new ones.",
      "Your intuition about relationships is accurate. Trust those feelings.",
      "Comfort in each other's presence defines true intimacy. Be present together.",
      "Cancer's protective nature extends to love. Guard your relationship fiercely."
    ],
    leo: [
      "Grand romantic gestures succeed today. Love big and express boldly.",
      "Your confidence attracts admirers. Shine your light and watch love approach.",
      "Romance becomes dramatic and passionate. Embrace the intensity.",
      "Appreciation strengthens relationships. Make your partner feel special.",
      "Creativity in love keeps things exciting. Plan a memorable date.",
      "Your generosity in love is reciprocated. Give freely and receive abundantly.",
      "Public displays of affection are favored. Show off your love proudly.",
      "Children and romance connect. Family love deepens your bonds."
    ],
    virgo: [
      "Acts of service speak love. Help your partner in practical ways.",
      "Your attention to detail shows you care. Notice the little things.",
      "Health matters in relationships. Suggest activities that promote wellness together.",
      "Organization in relationship life brings peace. Plan and prepare together.",
      "Perfection in love isn't possible, but effort matters. Show you try.",
      "Your helpful nature is deeply appreciated. Be of service to your beloved.",
      "Analysis of relationships brings clarity. Understanding leads to better love.",
      "Reliability in romance builds trust. Be there when you say you will."
    ],
    libra: [
      "Balance and harmony define your romantic ideal. Create equilibrium in love.",
      "Partnership energy is strong. Collaborative activities strengthen bonds.",
      "Beauty enhances romance. Dress up and create an aesthetic experience.",
      "Compromise brings relationship peace. Meet your partner halfway.",
      "Social activities as a couple bring joy. Introduce your partner to friends.",
      "Your diplomatic skills smooth relationship conflicts. Communicate with grace.",
      "Romantic gestures should be reciprocal. Ensure love flows both ways.",
      "Fairness in relationships is non-negotiable. Balance give and take."
    ],
    scorpio: [
      "Emotional depth transforms love. Share your true self with your partner.",
      "Intimacy reaches new levels. Vulnerability creates profound connection.",
      "Trust is the foundation today. Build it slowly and protect it fiercely.",
      "Mystery and passion combine for intense romance. Embrace the darkness and light.",
      "Loyalty in love is absolute for you. Commit wholeheartedly or not at all.",
      "Your intuition about relationships guides you. Trust those powerful feelings.",
      "Transform relationship challenges into growth. Love evolves through honesty.",
      "Possessiveness can arise. Channel this energy into devotion instead."
    ],
    sagittarius: [
      "Adventure awaits in romance. Plan a getaway or spontaneous date.",
      "Your optimism attracts love. Positive energy is your romantic superpower.",
      "Freedom within relationships is essential. Give space to receive trust.",
      "Philosophical conversations deepen connections. Explore big ideas together.",
      "Honesty in love is non-negotiable. Speak your truth with kindness.",
      "Travel with your partner strengthens bonds. Shared adventures create memories.",
      "Playfulness keeps romance alive. Laugh together often and freely.",
      "Long-distance relationships may work. Love transcends physical distance."
    ],
    capricorn: [
      "Commitment deepens relationships. Take your love to the next level today.",
      "Building a future together is satisfying. Discuss long-term plans.",
      "Traditional romance appeals to you. Courtship with intention brings success.",
      "Your ambition includes love. Build relationships that support your goals.",
      "Responsibility in relationships shows maturity. Be the dependable partner.",
      "Public declarations of commitment are favored. Make it official if ready.",
      "Financial harmony strengthens relationships. Align money goals with your partner.",
      "Patience in romance yields lasting love. Don't rush meaningful connections."
    ],
    aquarius: [
      "Friendship forms the best foundation for love. Build from connection.",
      "Unconventional relationships work for you. Define love on your terms.",
      "Your independence attracts like-minded souls. Love without losing yourself.",
      "Intellectual connection sparks romance. Meet minds and hearts will follow.",
      "Group settings may lead to romantic encounters. Your network is valuable.",
      "Humanitarian values attract compatible partners. Share your vision for the world.",
      "Space in relationships keeps them healthy. Allow each other room to grow.",
      "Surprise your partner with something unexpected. Originality in love wins."
    ],
    pisces: [
      "Your empathy creates profound connection. Feel deeply with your partner.",
      "Romantic dreams become reality. Visualize the love you desire.",
      "Artistic expression of love is powerful. Create something for your beloved.",
      "Spiritual connection in relationships deepens. Share your inner worlds.",
      "Your sensitivity is a gift in love. Feel your way to relationship harmony.",
      "Sacrifice in love should be mutual. Ensure balance in giving.",
      "Imaginative dates create magical memories. Think outside ordinary romance.",
      "Compassion strengthens your bond. Forgive freely and love deeply."
    ]
  },
  career: {
    aries: [
      "Take initiative on a project. Your leadership drives results.",
      "A competitive edge helps you stand out. Showcase your unique strengths.",
      "Your energy inspires the team. Be the spark that motivates others.",
      "Bold career moves are favored today. Pitch your ideas confidently.",
      "Quick thinking solves problems at work. Trust your rapid decisions.",
      "Starting new projects brings success. Launch that venture you've been planning.",
      "Your pioneering spirit is recognized. Blaze trails and others will follow.",
      "Direct communication with authority figures pays off. Speak up clearly."
    ],
    taurus: [
      "Steady progress leads to career success. Consistency impresses leadership.",
      "Financial rewards for hard work are coming. Your value is recognized.",
      "Building practical skills strengthens your position. Learn by doing.",
      "Reliability at work builds your reputation. Be the one others count on.",
      "Creative solutions to work problems earn praise. Trust your aesthetic sense.",
      "Patience in career matters pays off. Wait for the right opportunity.",
      "Material success in your field is achievable. Work toward tangible results.",
      "Your persistence overcomes obstacles. Stay the course despite challenges."
    ],
    gemini: [
      "Communication skills drive your career success. Speak, write, present effectively.",
      "Networking opens doors today. Connect with colleagues and industry peers.",
      "Adaptability at work makes you invaluable. Pivot quickly when needed.",
      "Information gathering benefits your projects. Research thoroughly before acting.",
      "Multiple projects may compete for attention. Prioritize strategically.",
      "Your quick learning impresses others. Master new skills rapidly.",
      "Collaborative work brings out your best. Team efforts yield great results.",
      "Presentation opportunities arise. Prepare well and shine brightly."
    ],
    cancer: [
      "Your intuition guides career decisions. Trust those gut feelings about opportunities.",
      "Building a supportive work environment is your strength. Create harmony.",
      "Team cohesion benefits from your leadership. Nurture your colleagues.",
      "Public recognition for your care and dedication may come today.",
      "Your protective nature serves clients well. Advocate for their interests.",
      "Emotional intelligence at work is valuable. Navigate office dynamics skillfully.",
      "Home-based work arrangements may be favorable. Consider remote options.",
      "Memory and attention to detail impress. Use these assets strategically."
    ],
    leo: [
      "Step into leadership roles. Your presence commands respect and attention.",
      "Creative projects receive positive attention. Showcase your vision.",
      "Your charisma wins clients and colleagues. Let your personality shine.",
      "Recognition for your achievements is deserved. Accept praise gracefully.",
      "Motivating others comes naturally. Inspire your team to greater heights.",
      "Presenting to large groups succeeds. Own the stage with confidence.",
      "Your generosity at work builds goodwill. Share credit and support others.",
      "Ambition propels you forward. Set bold career goals and pursue them."
    ],
    virgo: [
      "Your attention to detail prevents problems. Quality work speaks for itself.",
      "Efficiency improvements save time and resources. Streamline processes.",
      "Analysis of complex issues provides solutions. Break down problems methodically.",
      "Health and wellness at work matters. Create ergonomic and healthy habits.",
      "Your organizational skills are in demand. Help others get organized too.",
      "Documentation and planning set you apart. Prepare thoroughly for meetings.",
      "Practical training opportunities arise. Learn skills that increase your value.",
      "Service orientation impresses clients and customers. Help and you'll be rewarded."
    ],
    libra: [
      "Diplomatic skills resolve workplace conflicts. Mediate with grace.",
      "Partnerships and collaborations succeed. Find win-win solutions.",
      "Your aesthetic sense enhances presentations. Make things beautiful.",
      "Negotiation opportunities arise. Advocate for fair terms confidently.",
      "Team harmony is your contribution. Create balanced working relationships.",
      "Public relations and networking favor you today. Build valuable connections.",
      "Fairness in decision-making earns respect. Consider all perspectives.",
      "Social skills open career doors. Your charm and tact are professional assets."
    ],
    scorpio: [
      "Research and investigation reveal opportunities. Dig deeper into projects.",
      "Your intensity transforms workplace challenges. Channel passion into results.",
      "Leadership recognizes your strategic thinking. Plan with vision and depth.",
      "Financial aspects of your role improve. Money matters align in your favor.",
      "Crisis management skills are needed. Your calm under pressure is valuable.",
      "Building trust in business relationships takes time but pays dividends.",
      "Your ability to read people serves you well. Understand hidden motivations.",
      "Transformative career moves are possible. Release what no longer serves growth."
    ],
    sagittarius: [
      "Your vision inspires others. Share big ideas with enthusiasm.",
      "Training and education advance your career. Invest in learning opportunities.",
      "International or distant work opportunities appear. Expand your horizons.",
      "Publishing or speaking engagements arise. Share your expertise widely.",
      "Optimism attracts opportunities. Believe in your potential and others will too.",
      "Sales and persuasion skills are strong today. Pitch with conviction.",
      "Your adventurous spirit leads to innovation. Try new approaches at work.",
      "Mentorship roles suit you today. Guide others with wisdom and encouragement."
    ],
    capricorn: [
      "Career advancement is highlighted. Your ambition drives upward mobility.",
      "Authority figures recognize your dedication. Promotion possibilities exist.",
      "Long-term planning yields results. Build foundations for future success.",
      "Your reputation is an asset. Maintain professionalism in all dealings.",
      "Traditional career paths serve you well. Respect established hierarchies.",
      "Financial success in your field is achievable. Work toward security and growth.",
      "Mentorship benefits your career. Learn from experienced professionals.",
      "Responsibility brings rewards. Take on challenges that demonstrate capability."
    ],
    aquarius: [
      "Innovation at work sets you apart. Think outside conventional boundaries.",
      "Team projects succeed with your vision. Inspire collective achievement.",
      "Technology skills are valuable today. Embrace digital tools and platforms.",
      "Your unique perspective solves problems. Offer unconventional solutions.",
      "Networking with forward-thinking people brings opportunities. Connect meaningfully.",
      "Humanitarian projects align with your values. Find purpose through service.",
      "Adaptability to workplace changes is an asset. Embrace evolution.",
      "Group presentations showcase your strengths. Lead with vision and inclusivity."
    ],
    pisces: [
      "Creativity in your work stands out. Artistic solutions impress.",
      "Your empathy helps clients and colleagues. Understand needs deeply.",
      "Spiritual or healing work calls to you. Consider service-oriented careers.",
      "Dreams and intuition guide career decisions. Trust your inner wisdom.",
      "Collaborative environments suit your style. Work harmoniously with others.",
      "Behind-the-scenes contributions are valuable. Your quiet impact matters.",
      "Imaginative thinking solves problems. Visualize creative solutions.",
      "Compassion at work builds loyalty. Treat others with genuine care."
    ]
  },
  family: {
    aries: [
      "Take the lead in family activities. Your energy motivates everyone.",
      "Be patient with younger family members. Your guidance shapes their futures.",
      "Family adventures create lasting bonds. Plan something exciting together.",
      "Your independence inspires family members. Show them how to stand strong.",
      "Competitive family games bring joy. Channel energy into playful rivalry.",
      "Starting new family traditions today brings future happiness.",
      "Direct communication clears family misunderstandings. Speak with love.",
      "Your courage in family matters is appreciated. Stand up for loved ones."
    ],
    taurus: [
      "Create comfort and stability for your family. Be the reliable foundation.",
      "Cooking a family meal strengthens bonds. Nourish them with love.",
      "Financial planning for the family's future is important. Plan carefully.",
      "Home improvements bring joy to everyone. Create beautiful spaces together.",
      "Your patience with family challenges is admirable. Stay calm and steady.",
      "Material gifts show love, but presence matters most. Spend quality time.",
      "Traditional family activities bring satisfaction. Honor your heritage.",
      "Sensory experiences create family memories. Share beauty, food, and comfort."
    ],
    gemini: [
      "Family conversations bring insights. Listen and share openly.",
      "Teaching younger family members is rewarding. Share your knowledge.",
      "Keeping in touch with distant relatives strengthens bonds. Reach out today.",
      "Family gatherings are favored. Your social energy makes them fun.",
      "Your curiosity about family history reveals interesting stories. Ask questions.",
      "Sibling relationships are highlighted. Strengthen those connections.",
      "Communication is the key to family harmony. Express yourself clearly.",
      "Variety in family activities keeps everyone engaged. Try something new."
    ],
    cancer: [
      "Nurturing family members comes naturally. Your care makes a difference.",
      "Home becomes a sanctuary today. Create warmth and comfort within.",
      "Family memories surface today. Share stories and preserve history.",
      "Emotional support for family members is needed. Be there for them.",
      "Your intuition about family matters is accurate. Trust those feelings.",
      "Cooking traditional family foods brings comfort. Share recipes.",
      "Protecting family is your priority. Stand guard over your loved ones.",
      "Creating family rituals strengthens bonds. Establish meaningful traditions."
    ],
    leo: [
      "Family celebrations bring joy. Make occasions special and memorable.",
      "Your generosity to family is appreciated. Give freely from the heart.",
      "Creative family projects bond everyone. Make art or music together.",
      "Take center stage in family activities. Your charisma entertains all.",
      "Praising family members builds confidence. Be their biggest cheerleader.",
      "Grand gestures of love touch hearts. Show affection boldly.",
      "Children respond to your playful energy. Be the fun parent or relative.",
      "Your warmth creates happy family memories. Radiate love to all."
    ],
    virgo: [
      "Helping family members practically shows love. Fix things, organize, assist.",
      "Health matters for family are highlighted. Encourage wellness together.",
      "Organizing family events brings satisfaction. Plan details with care.",
      "Your attention to family needs is appreciated. Notice what's required.",
      "Teaching practical skills to younger family members benefits them.",
      "Improving family routines creates harmony. Streamline daily life.",
      "Clean and comfortable spaces matter to your family. Create order lovingly.",
      "Problem-solving for family issues is your strength. Offer solutions."
    ],
    libra: [
      "Family harmony is your goal. Mediate conflicts with fairness and grace.",
      "Hosting family gatherings brings joy. Create beautiful, welcoming spaces.",
      "Balance time among family members. Give attention fairly to all.",
      "Aesthetic touches to family life enhance everyone's mood. Add beauty.",
      "Partnership with family members in projects strengthens bonds. Collaborate.",
      "Diplomacy resolves family disagreements. Help everyone feel heard.",
      "Social activities with family create happy memories. Have fun together.",
      "Your ability to see all perspectives benefits family decisions."
    ],
    scorpio: [
      "Deep family conversations transform relationships. Be vulnerable.",
      "Family secrets may surface. Handle revelations with care and understanding.",
      "Your intensity in family matters shows commitment. Love deeply.",
      "Protecting family is instinctual. Stand guard over loved ones.",
      "Healing old family wounds is possible today. Forgive and move forward.",
      "Shared resources in the family need discussion. Handle finances transparently.",
      "Your intuition about family members guides you. Trust those insights.",
      "Transform family dynamics through honesty. Speak difficult truths with love."
    ],
    sagittarius: [
      "Family travel creates lasting bonds. Plan an adventure together.",
      "Your optimism lifts family spirits. Bring positivity to gatherings.",
      "Sharing wisdom with younger family members is rewarding. Guide them.",
      "Family activities that involve learning and growth are favored.",
      "Freedom within family relationships is important. Give space lovingly.",
      "Long-distance family connections need attention. Reach across miles.",
      "Humor brightens family interactions. Laugh together often.",
      "Broadening family horizons through new experiences creates memories."
    ],
    capricorn: [
      "Family responsibilities may feel heavy but rewarding. Step up confidently.",
      "Planning for the family's future shows love. Build security together.",
      "Traditional family values matter to you. Honor and uphold them.",
      "Financial security for the family is a priority. Plan and provide.",
      "Your stability anchors the family. Be the reliable foundation.",
      "Teaching discipline and responsibility to younger family members matters.",
      "Building family legacies is important. Create lasting value.",
      "Authority within the family is respected. Lead with wisdom."
    ],
    aquarius: [
      "Unique family activities bring joy. Do something different together.",
      "Your forward-thinking benefits family planning. Look ahead together.",
      "Extended family connections are valuable. Build broader family networks.",
      "Technology helps keep family connected. Use digital tools to stay close.",
      "Your independence within the family is healthy. Model authenticity.",
      "Humanitarian values taught to family members make a difference.",
      "Group family projects succeed. Harness collective family power.",
      "Accepting family members' uniqueness strengthens bonds. Celebrate differences."
    ],
    pisces: [
      "Your empathy connects family members deeply. Feel what they feel.",
      "Creative family activities bond everyone. Make art, music, or magic together.",
      "Forgiveness within the family brings healing. Let go of past hurts.",
      "Dreams about family members offer insights. Pay attention to messages.",
      "Compassionate listening helps family members. Hear their hearts.",
      "Spiritual practices together strengthen family bonds. Pray or meditate together.",
      "Your sensitivity is a gift to the family. Feel and care deeply.",
      "Creating a nurturing family environment is your strength. Provide emotional safety."
    ]
  },
  health: {
    aries: [
      "Your energy is high today. Channel it into physical exercise.",
      "Competitive sports appeal to you. Challenge yourself physically.",
      "Head-related health needs attention. Protect your head and eyes.",
      "Quick bursts of exercise suit your nature. Sprint, jump, move fast.",
      "Your pioneering spirit extends to fitness. Try a new workout today.",
      "Impulse control in eating matters. Think before you snack.",
      "Injury prevention is important. Warm up properly before intense activity.",
      "Mental health benefits from action. Don't sit with worries; move."
    ],
    taurus: [
      "Sensory relaxation benefits your health. Enjoy massages and spa treatments.",
      "Throat health needs attention. Stay hydrated and soothe your voice.",
      "Slow, steady exercise suits you. Walking and gentle yoga are perfect.",
      "Comfort foods should be nourishing. Choose healthy, satisfying options.",
      "Your patience helps establish lasting health habits. Build routines slowly.",
      "Neck and shoulder tension may arise. Stretch and release regularly.",
      "Earthy connections heal. Spend time in nature and gardens.",
      "Financial stress affects health. Budget to reduce money worries."
    ],
    gemini: [
      "Mental stimulation benefits your brain health. Learn something new today.",
      "Arms, shoulders, and lungs need care. Stretch and breathe deeply.",
      "Variety in exercise keeps you motivated. Mix up your workouts.",
      "Nervous system health is important. Practice calming techniques.",
      "Social activities boost your mood. Connect for mental wellness.",
      "Breathing exercises improve your health. Focus on deep, rhythmic breaths.",
      "Communication about health concerns helps. Speak up about your needs.",
      "Multitasking may cause stress. Focus on one thing at a time."
    ],
    cancer: [
      "Emotional health is physical health. Process feelings for better wellness.",
      "Digestive health needs attention. Eat nourishing, easily digestible foods.",
      "Home-based workouts suit your nature. Create comfort in exercise.",
      "Water-based activities are healing. Swim or soak for relaxation.",
      "Breast and chest health is important. Perform regular self-checks.",
      "Your intuition about health guides you. Listen to your body's signals.",
      "Comfort eating may tempt you. Find emotional nourishment elsewhere.",
      "Sleep is crucial for your well-being. Create a restful sanctuary."
    ],
    leo: [
      "Heart health needs attention. Cardio exercise is especially beneficial.",
      "Your vitality radiates when you exercise. Make movement fun and dramatic.",
      "Back health is important. Strengthen your core for support.",
      "Expressing emotions improves health. Don't suppress your feelings.",
      "Confidence in your appearance boosts wellness. Feel good, look good.",
      "Overheating during exercise may occur. Stay hydrated and cool down.",
      "Your generous nature extends to health. Share wellness with others.",
      "Creative outlets improve mental health. Express yourself artistically."
    ],
    virgo: [
      "Digestive health needs care. Eat mindfully and choose whole foods.",
      "Your analytical nature helps track health data. Monitor and optimize.",
      "Small, consistent health habits yield results. Build routines methodically.",
      "Nervous system health is important. Practice stress reduction daily.",
      "Intestines and abdominal health need attention. Support healthy digestion.",
      "Your detail-oriented approach serves wellness. Research health topics thoroughly.",
      "Work-life balance affects health. Set boundaries to protect well-being.",
      "Perfectionism in health goals can backfire. Aim for progress, not perfection."
    ],
    libra: [
      "Balance in all things promotes health. Harmonize work, rest, and play.",
      "Kidney health needs attention. Stay hydrated and support elimination.",
      "Partners exercise for motivation. Working out with others keeps you committed.",
      "Beauty treatments enhance well-being. Pamper yourself as self-care.",
      "Lower back health is important. Stretch and strengthen this area.",
      "Social connections boost your immune system. Nurture relationships.",
      "Indecision about health plans slows progress. Commit and follow through.",
      "Aesthetic environments improve mental health. Create beautiful spaces."
    ],
    scorpio: [
      "Detoxification benefits your body. Support elimination pathways.",
      "Reproductive health is important. Pay attention to this area of wellness.",
      "Intense exercise suits your nature. Transform through physical challenge.",
      "Emotional release improves physical health. Let go and heal.",
      "Your regenerative powers are strong. Recovery from illness is rapid.",
      "Elimination organs need care. Support liver, kidney, and colon health.",
      "Deep tissue massage releases stored tension. Unwind knots physically.",
      "Privacy in health matters is important. Protect your healing space."
    ],
    sagittarius: [
      "Outdoor activities energize you. Exercise in nature whenever possible.",
      "Hip and thigh health needs attention. Stretch and strengthen this area.",
      "Adventure and travel boost your well-being. Explore for mental health.",
      "Your optimism supports healing. Believe in your recovery and wellness.",
      "Liver health is important. Support this organ with mindful choices.",
      "Expansion in fitness goals is natural. Always seek new physical challenges.",
      "Overdoing exercise risks injury. Listen to your body's limits.",
      "Philosophical approaches to health work for you. Find meaning in wellness."
    ],
    capricorn: [
      "Bone health needs attention. Support skeletal strength with nutrition.",
      "Knees and joints require care. Protect them during exercise.",
      "Disciplined routines serve your health. Build sustainable habits.",
      "Skin health matters to you. Protect and nourish your body's covering.",
      "Teeth and bone structure need care. Maintain dental and skeletal health.",
      "Your perseverance in health goals pays off. Stay the course.",
      "Work stress affects your body. Decompress with intentional relaxation.",
      "Traditional approaches to wellness work for you. Trust time-tested methods."
    ],
    aquarius: [
      "Circulation needs attention. Keep blood flowing with movement.",
      "Ankle health is important. Stretch and strengthen these joints.",
      "Innovative fitness approaches appeal to you. Try cutting-edge workouts.",
      "Nervous system health is crucial. Calm your electric nature with meditation.",
      "Unconventional health methods may work for you. Explore alternative options.",
      "Your humanitarian nature benefits from group wellness. Join community fitness.",
      "Technology can support your health. Use apps and devices mindfully.",
      "Social isolation affects wellness. Connect for better health outcomes."
    ],
    pisces: [
      "Feet health needs attention. Care for your foundation with massage and comfort.",
      "Water-based activities are healing. Swim, soak, or hydrotherapize.",
      "Sleep and dreams offer health insights. Listen to nighttime messages.",
      "Your immune system needs support. Boost it with rest and nutrition.",
      "Lymphatic health is important. Encourage flow with gentle movement.",
      "Spiritual practices enhance well-being. Meditate, pray, or contemplate.",
      "Escapism through substances harms health. Face reality for true healing.",
      "Compassion for your body supports healing. Treat yourself with gentleness."
    ]
  }
};