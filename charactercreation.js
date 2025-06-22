// --- DATA ---
// This section contains all the game data from the rulebook.
const ARCHETYPES = {
  Brains: {
    description: "A brilliant Academic or a cunning Weaver who handles technical and intellectual challenges.",
    attributeSuggestions: {
      "The Specialist": { COG: 2, DEX: 1, PRE: 1, SOM: 0 },
      "The Field Analyst": { COG: 2, SOM: 1, DEX: 1, PRE: 0 },
      "The Balanced Genius": { COG: 1, DEX: 1, PRE: 1, SOM: 1 },
    },
    careerSuggestions: {
      "The Infiltration Specialist": { Weaver: 2, Scout: 1, Doctor: 1, Shadow: 0 },
      "The Corporate Analyst": { Weaver: 2, Academic: 1, Corpo: 1, Fixer: 0 },
      "The Versatile Technician": { Weaver: 1, Torque: 1, Scout: 1, Doctor: 1 },
    }
  },
  Muscle: {
    description: "A hardened Soldier or tough-as-nails Colonist who excels at combat and intimidation.",
    attributeSuggestions: {
      "The Juggernaut": { SOM: 2, DEX: 1, COG: 1, PRE: 0 },
      "The Intimidating Brawler": { SOM: 2, PRE: 1, DEX: 1, COG: 0 },
      "The Agile Warrior": { SOM: 1, DEX: 2, COG: 1, PRE: 0 },
    },
     careerSuggestions: {
      "The Colonial Militiaman": { Soldier: 2, Colonist: 2, Torque: 0, Marshal: 0 },
      "The Underworld Enforcer": { "Bounty Hunter": 2, Outlaw: 1, Fixer: 1, Shadow: 0 },
      "The Ex-Corpo Security": { Soldier: 2, Corpo: 1, Pilot: 1, Scout: 0 },
    }
  },
  Ghost: {
    description: "A stealthy Shadow or a resourceful Scavenger who specializes in infiltration.",
    attributeSuggestions: {
      "The Specialist": { DEX: 2, COG: 2, SOM: 0, PRE: 0 },
      "The Hardened Survivor": { DEX: 2, SOM: 1, COG: 1, PRE: 0 },
      "The Urban Phantom": { DEX: 2, PRE: 1, COG: 1, SOM: 0 },
    },
    careerSuggestions: {
        "The Professional Thief": { Shadow: 2, Scout: 1, Fixer: 1, Weaver: 0 },
        "The Social Engineer": { Dilettante: 2, Shadow: 1, Corpo: 1, Fixer: 0 },
        "The Rooftop Runner": { Scavenger: 2, Shadow: 1, Torque: 1, Pilot: 0 },
    }
  },
  Face: {
    description: "A charismatic Fixer or a well-connected Dilettante who navigates the social landscape.",
    attributeSuggestions: {
        "The Pure Socialite": { PRE: 2, COG: 1, DEX: 1, SOM: 0 },
        "The Confident Operator": { PRE: 2, SOM: 1, COG: 1, DEX: 0 },
        "The Fast-Talker": { PRE: 2, DEX: 2, COG: 0, SOM: 0 },
    },
    careerSuggestions: {
        "The Information Broker": { Fixer: 2, Outlaw: 1, Shadow: 1, Corpo: 0 },
        "The Corporate Shark": { Corpo: 2, Dilettante: 1, Fixer: 1, Pilot: 0 },
        "The Smuggler Captain": { Pilot: 2, Outlaw: 1, Fixer: 1, Torque: 0 },
    }
  },
   Zealot: {
    description: "A scholar or visionary with a dangerous obsession, offering strange insights but representing a walking narrative complication.",
    attributeSuggestions: {
        "The Scholar": { COG: 2, PRE: 1, DEX: 1, SOM: 0 },
        "The Prophet": { PRE: 2, COG: 2, DEX: 0, SOM: 0 },
        "The Field Researcher": { COG: 1, PRE: 1, DEX: 1, SOM: 1 },
    },
    careerSuggestions: {
        "The Ghost Hunter": { Academic: 2, Weaver: 1, Doctor: 1, Fixer: 0 },
        "The Corporate Heretic": { Academic: 2, Corpo: 1, Shadow: 1, Outlaw: 0 },
        "The Fragmentation Purist": { Weaver: 2, Academic: 1, Doctor: 1, Marshal: 0 },
    }
  }
};

const COMBAT_SUGGESTIONS = {
  Brains: {
    "Cautious Operator": { DF: 2, IN: 2, RG: 0, ML: 0 },
    "Prepared Survivor": { DF: 1, IN: 1, RG: 1, ML: 1 },
    "Overwatch Specialist": { RG: 2, DF: 1, IN: 1, ML: 0 },
  },
  Muscle: {
    "Shock Trooper": { ML: 2, RG: 1, IN: 1, DF: 0 },
    "Bodyguard": { DF: 2, RG: 1, IN: 1, ML: 0 },
    "Grunt Veteran": { RG: 1, ML: 1, DF: 1, IN: 1 },
  },
  Ghost: {
    "The Untouchable": { DF: 2, IN: 2, RG: 0, ML: 0 },
    "The Assassin": { RG: 2, IN: 2, DF: 0, ML: 0 },
    "The Pragmatist": { DF: 1, IN: 1, RG: 1, ML: 1 },
  },
  Face: {
    "Ace Pilot": { DF: 2, IN: 2, RG: 0, ML: 0 },
    "Captain's Authority": { RG: 2, IN: 1, DF: 1, ML: 0 },
    "Slippery Smuggler": { IN: 2, DF: 1, RG: 1, ML: 0 },
  },
  Zealot: {
      "Field Researcher": { DF: 2, IN: 2, RG: 0, ML: 0 },
      "Pragmatic Scholar": { DF: 1, IN: 1, RG: 1, ML: 1 },
      "Self-Taught Marksman": { RG: 2, DF: 1, IN: 1, ML: 0 },
  }
};

const POSITIVE_TAGS = {
  "Meticulous": "Once per scene, when using a Ready Action to prepare, gain +2 FP on the next related roll.",
  "Precision-Tuned Myofibers": "Once per scene, gain +2 FP on a Dexterity roll requiring fine control.",
  "Overclocked Reflexes": "Once per scene, gain +2 FP when making a Reflex Save or rolling Initiative.",
  "Servo Strength": "Once per scene, gain +2 FP on a feat of brute strength or a power-based melee attack.",
  "Bone Reinforcement": "Gain DR 1 vs. Blunt/Knockdown. Once per scene, gain +2 FP after taking kinetic damage.",
  "Bad Temper": "Once per scene, gain +2 FP when resisting Manipulation or Persuasion.",
  "Protective": "Once per round, make a Reflex Save (TN 9) to intercept a hit on an ally. Adjacent allies gain +1 Defence.",
  "Predator Gait Calibration": "Once per scene, gain +2 FP on Stealth or Pursuit actions.",
  "Pheromone Cloak": "Once per scene, gain +2 FP to reduce suspicion or enhance charm.",
  "Owl’s Vision": "Once per scene, gain +2 FP when acting in darkness, targeting distant enemies, or spotting details.",
  "Sangfroid": "Once per scene, negate the first SP gain during an action sequence.",
  "Carouser": "Once per scene, gain +2 FP when gathering info, making contacts, or bartering.",
  "Stoic": "Once per scene, roll Will instead of Endurance. If successful, gain +2 FP.",
  "Neural Crossfire Hub": "Once per scene, gain +2 FP when splitting focus between two tasks."
};

const NEGATIVE_TAGS = {
  "Bad Filters": "Once per scene, GM can describe sensory interference. Gain +1 SP.",
  "Rebel": "When asked to follow direct orders, roll Will. On failure, act against the command and gain +1 SP.",
  "Paranoia": "After failing a Perception roll, gain +1 SP as your mind spirals.",
  "Callous": "Gain +1 SP on social rolls with past victims.",
  "Edited Memories": "Once per session, GM can describe a memory misfire. Gain +1 SP.",
};

const OBLIGATIONS = {
  "Debt": "You owe a significant sum to a dangerous creditor.",
  "Betrayal": "You were betrayed by someone you trusted, or you did the betraying. The past haunts you.",
  "Responsibility": "You are the secret guardian of a person, place, or ideal that requires constant attention.",
  "Blackmail": "Someone knows a dark secret and uses it to control you.",
  "Dutybound": "You are bound by a code or a loyalty to a group from your past.",
  "Obsession": "You are fixated on a person, object, or concept, often to your own detriment.",
  "Addiction": "You have a craving you must feed, be it for a substance or a thrill.",
  "Family": "Your extended family is a source of constant drama and a drain on your resources."
};

const BACKGROUND_TEMPLATES = {
    Brains: (c) => `A prodigy who bought their talent with borrowed time, ${c.name} is a master of all things technical. Their skill comes from a set of illegal augments, and now they're hunted by the creditor.`,
    Muscle: (c) => `${c.name} was once a loyal corporate soldier. When their unit was betrayed and disbanded, their loyalty fractured. Now they're a freelancer, driven by a fierce duty to protect their new crew.`,
    Ghost: (c) => `To the galaxy at large, ${c.name} doesn't exist. A master of infiltration, their freedom is an illusion, held hostage by an unknown party who blackmails them with the truth of their past.`,
    Face: (c) => `Captain of 'The Vagrant', ${c.name} is preternaturally calm. This unflappable demeanor is a requirement, as they juggle a demanding extended family, a beat-up ship, and the needs of a volatile crew.`,
    Zealot: (c) => `${c.name} was a respected academic until they found what they believe is a divine signal in the Mesh. Now, they hunt for Ghosts and Fragments, convinced they are collecting verses of a holy text.`
};

const NAMES = {
    Brains: ["Aksel", "Soren", "Jian", "Ren"],
    Muscle: ["Zane", "Grendel", "Vex", "Rook"],
    Ghost: ["Nyx", "Silas", "Echo", "Vanish"],
    Face: ["Silas", "Rian", "Cora", "Jax"],
    Zealot: ["Elias", "Thorn", "Cassian", "Orin"]
};

// --- HELPER COMPONENTS ---

const OptionCard = ({ title, description, onSelect, isSelected }) => (
  <div
    className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${isSelected ? 'bg-cyan-400 border-cyan-300 text-slate-900 shadow-lg' : 'bg-slate-800 border-slate-700 hover:border-cyan-500 hover:bg-slate-700'}`}
    onClick={onSelect}
  >
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-sm opacity-80">{description}</p>
  </div>
);

const StepContainer = ({ title, children }) => (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2 tracking-wider uppercase">{title}</h2>
        <div className="w-16 h-1 bg-cyan-300 mb-8"></div>
        {children}
    </div>
);

const PointsTracker = ({ points, total }) => (
    <div className="text-right text-cyan-300 font-bold text-lg mb-4">
        Points Remaining: {total - Object.values(points).reduce((a, b) => a + b, 0)} / {total}
    </div>
);


// --- CORE APP ---

export default function App() {
  const [step, setStep] = useState(0);
  const [character, setCharacter] = useState({
    name: "Character",
    archetype: null,
    attributes: { SOM: 0, DEX: 0, COG: 0, PRE: 0 },
    careers: {},
    combatStats: { ML: 0, RG: 0, DF: 0, IN: 0 },
    positiveTags: [],
    negativeTags: [],
    obligation: null,
    background: ""
  });

  const handleSelect = (key, value) => {
    setCharacter(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev > 0 ? prev - 1 : 0);
  const restart = () => {
    setStep(0);
    setCharacter({
        name: "Character",
        archetype: null,
        attributes: { SOM: 0, DEX: 0, COG: 0, PRE: 0 },
        careers: {},
        combatStats: { ML: 0, RG: 0, DF: 0, IN: 0 },
        positiveTags: [],
        negativeTags: [],
        obligation: null,
        background: ""
    });
  };

  const generateCharacterDetails = useCallback(() => {
        if (character.archetype) {
            const name = NAMES[character.archetype][Math.floor(Math.random() * NAMES[character.archetype].length)];
            const tempChar = {...character, name};
            const background = BACKGROUND_TEMPLATES[character.archetype](tempChar);
            setCharacter(prev => ({...prev, name, background}));
        }
  }, [character.archetype]);

  useEffect(() => {
      if (step === 6 && !character.background) {
        generateCharacterDetails();
      }
  }, [step, character.background, generateCharacterDetails]);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <ArchetypeStep onSelect={handleSelect} nextStep={nextStep} character={character} />;
      case 1:
        return <AttributeStep onSelect={handleSelect} nextStep={nextStep} character={character} />;
      case 2:
        return <CareerStep onSelect={handleSelect} nextStep={nextStep} character={character} />;
      case 3:
        return <CombatStep onSelect={handleSelect} nextStep={nextStep} character={character} />;
      case 4:
        return <TagStep onSelect={handleSelect} nextStep={nextStep} character={character} />;
      case 5:
        return <ObligationStep onSelect={handleSelect} nextStep={nextStep} character={character} />;
      case 6:
        return <CharacterSheet character={character} restart={restart} />;
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <main className="bg-slate-900 text-white min-h-screen font-sans flex flex-col items-center justify-center p-4">
        <div className="w-full bg-slate-800/50 rounded-lg shadow-2xl backdrop-blur-sm border border-slate-700 overflow-hidden">
            <header className="p-4 bg-slate-900/70 border-b border-slate-700">
                <h1 className="text-2xl font-bold text-center tracking-widest text-white">GHOST DISSONANCE</h1>
                <p className="text-center text-cyan-400">CHARACTER CREATOR</p>
            </header>
            <div className="p-2">
                {renderStep()}
            </div>
             {step < 6 && (
                <footer className="p-4 bg-slate-900/70 border-t border-slate-700 flex justify-between items-center">
                    <button
                        onClick={prevStep}
                        disabled={step === 0}
                        className="px-6 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Back
                    </button>
                    <div className="text-sm text-slate-400">STEP {step + 1} / 6</div>
                </footer>
            )}
        </div>
    </main>
  );
}

// --- STEP COMPONENTS ---

const ArchetypeStep = ({ onSelect, nextStep, character }) => {
    const handleNext = () => {
        if(character.archetype) nextStep();
    }
    
    return (
        <StepContainer title="Choose Your Archetype">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {Object.entries(ARCHETYPES).map(([name, data]) => (
                    <OptionCard 
                        key={name}
                        title={name}
                        description={data.description}
                        isSelected={character.archetype === name}
                        onSelect={() => onSelect('archetype', name)}
                    />
                ))}
            </div>
            <div className="text-center">
                <button
                    onClick={handleNext}
                    disabled={!character.archetype}
                    className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-md hover:bg-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Confirm Archetype
                </button>
            </div>
        </StepContainer>
    );
};

const AttributeStep = ({ onSelect, nextStep, character }) => {
    const suggestions = ARCHETYPES[character.archetype].attributeSuggestions;
    
    const handleNext = () => {
        const totalPoints = Object.values(character.attributes).reduce((a, b) => a + b, 0);
        if (totalPoints === 4) {
             nextStep();
        } else {
            alert("You must spend exactly 4 points.");
        }
    };
    
    return (
        <StepContainer title="Distribute Attributes">
            <p className="mb-6 text-slate-300">Allocate 4 points into your four core attributes. No attribute can be higher than +2. Below are some suggestions for your chosen archetype: <span className="font-bold text-cyan-400">{character.archetype}</span>.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {Object.entries(suggestions).map(([name, data]) => (
                    <OptionCard 
                        key={name}
                        title={name}
                        description={Object.entries(data).map(([key, val]) => `${key}: ${val > 0 ? '+' : ''}${val}`).join(', ')}
                        isSelected={JSON.stringify(character.attributes) === JSON.stringify(data)}
                        onSelect={() => onSelect('attributes', data)}
                    />
                ))}
            </div>
            <div className="text-center">
                 <button
                    onClick={handleNext}
                    className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-md hover:bg-cyan-400 transition"
                >
                    Confirm Attributes
                </button>
            </div>
        </StepContainer>
    );
};

const CareerStep = ({ onSelect, nextStep, character }) => {
    const suggestions = ARCHETYPES[character.archetype].careerSuggestions;
     const handleNext = () => {
        const totalPoints = Object.values(character.careers).reduce((a, b) => a + b, 0);
        if (Object.keys(character.careers).length === 4 && totalPoints === 4) {
             nextStep();
        } else {
            alert("You must choose 4 careers and spend exactly 4 points.");
        }
    };
    
    return (
         <StepContainer title="Select Careers">
            <p className="mb-6 text-slate-300">Choose 4 starting careers and allocate 4 points among them. No career can be higher than +2. A rank of 0 means basic familiarity.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {Object.entries(suggestions).map(([name, data]) => (
                    <OptionCard 
                        key={name}
                        title={name}
                        description={Object.entries(data).map(([key, val]) => `${key} ${val > 0 ? '+' : ''}${val}`).join(', ')}
                        isSelected={JSON.stringify(character.careers) === JSON.stringify(data)}
                        onSelect={() => onSelect('careers', data)}
                    />
                ))}
            </div>
             <div className="text-center">
                 <button
                    onClick={handleNext}
                    disabled={Object.keys(character.careers).length === 0}
                    className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-md hover:bg-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Confirm Careers
                </button>
            </div>
        </StepContainer>
    )
};

const CombatStep = ({ onSelect, nextStep, character }) => {
    const suggestions = COMBAT_SUGGESTIONS[character.archetype];
    const handleNext = () => {
        const totalPoints = Object.values(character.combatStats).reduce((a, b) => a + b, 0);
        if (totalPoints === 4) {
             nextStep();
        } else {
            alert("You must spend exactly 4 points.");
        }
    };

    return (
        <StepContainer title="Assign Combat Stats">
            <p className="mb-6 text-slate-300">Allocate 4 points into your combat stats: Melee (ML), Ranged (RG), Defence (DF), and Initiative (IN).</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {Object.entries(suggestions).map(([name, data]) => (
                    <OptionCard 
                        key={name}
                        title={name}
                        description={Object.entries(data).map(([key, val]) => `${key}: +${val}`).join(', ')}
                        isSelected={JSON.stringify(character.combatStats) === JSON.stringify(data)}
                        onSelect={() => onSelect('combatStats', data)}
                    />
                ))}
            </div>
            <div className="text-center">
                 <button
                    onClick={handleNext}
                    disabled={Object.values(character.combatStats).reduce((a, b) => a + b, 0) !== 4}
                    className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-md hover:bg-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Confirm Combat Stats
                </button>
            </div>
        </StepContainer>
    );
};

const TagStep = ({ onSelect, nextStep, character }) => {
    const [selectedPositive, setSelectedPositive] = useState(character.positiveTags);
    const [selectedNegative, setSelectedNegative] = useState(character.negativeTags);

    const handleTogglePositive = (tag) => {
        const isSelected = selectedPositive.includes(tag);
        let newPositive = [...selectedPositive];
        
        if (isSelected) {
            newPositive = newPositive.filter(t => t !== tag);
        } else if (newPositive.length < 3) {
            newPositive.push(tag);
        }
        setSelectedPositive(newPositive);
    };

     const handleToggleNegative = (tag) => {
        const isSelected = selectedNegative.includes(tag);
        let newNegative = [...selectedNegative];
        
        if (isSelected) {
            newNegative = newNegative.filter(t => t !== tag);
        } else {
            newNegative.push(tag);
        }
        setSelectedNegative(newNegative);
    };

    const handleNext = () => {
        onSelect('positiveTags', selectedPositive);
        onSelect('negativeTags', selectedNegative);
        nextStep();
    };

    const requiredNegatives = Math.max(0, selectedPositive.length - 1);
    const isReady = selectedNegative.length === requiredNegatives && selectedPositive.length > 0;

    return (
        <StepContainer title="Select Tags">
            <p className="mb-6 text-slate-300">You start with one free Positive Tag. For each additional Positive Tag (up to 2 more), you must take one Negative Tag.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-cyan-300 mb-4">Positive Tags ({selectedPositive.length}/3)</h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                        {Object.entries(POSITIVE_TAGS).map(([name, desc]) => (
                             <OptionCard 
                                key={name}
                                title={name}
                                description={desc}
                                isSelected={selectedPositive.includes(name)}
                                onSelect={() => handleTogglePositive(name)}
                            />
                        ))}
                    </div>
                </div>
                <div>
                     <h3 className="text-2xl font-bold text-red-400 mb-4">Negative Tags ({selectedNegative.length}/{requiredNegatives})</h3>
                     <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                        {Object.entries(NEGATIVE_TAGS).map(([name, desc]) => (
                             <OptionCard 
                                key={name}
                                title={name}
                                description={desc}
                                isSelected={selectedNegative.includes(name)}
                                onSelect={() => handleToggleNegative(name)}
                            />
                        ))}
                    </div>
                </div>
            </div>
             <div className="text-center mt-8">
                 <button
                    onClick={handleNext}
                    disabled={!isReady}
                    className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-md hover:bg-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Confirm Tags
                </button>
            </div>
        </StepContainer>
    )
};

const ObligationStep = ({ onSelect, nextStep, character }) => {
    return (
        <StepContainer title="Choose Your Obligation">
            <p className="mb-6 text-slate-300">Every character has a past that haunts them. This complication drives your personal story. Choose the burden you carry.</p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {Object.entries(OBLIGATIONS).map(([name, data]) => (
                    <OptionCard 
                        key={name}
                        title={name}
                        description={data}
                        isSelected={character.obligation === name}
                        onSelect={() => onSelect('obligation', name)}
                    />
                ))}
            </div>
             <div className="text-center">
                 <button
                    onClick={nextStep}
                    disabled={!character.obligation}
                    className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-md hover:bg-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Complete Character
                </button>
            </div>
        </StepContainer>
    );
}

const CharacterSheet = ({ character, restart }) => {
    const StatDisplay = ({ label, value }) => (
        <div className="bg-slate-800 p-3 rounded-md text-center">
            <div className="text-cyan-300 uppercase text-xs tracking-widest">{label}</div>
            <div className="text-2xl font-bold">{value > 0 ? '+' : ''}{value}</div>
        </div>
    );
    
    return (
        <StepContainer title="Character Profile">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="text-center mb-6">
                    <h3 className="text-4xl font-bold text-white">{character.name}</h3>
                    <p className="text-cyan-400 text-xl">{character.archetype}</p>
                </div>

                <p className="text-center italic text-slate-300 mb-8">{character.background}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {Object.entries(character.attributes).map(([key, val]) => <StatDisplay key={key} label={key} value={val} />)}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {Object.entries(character.combatStats).map(([key, val]) => <StatDisplay key={key} label={key} value={val} />)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h4 className="text-xl font-bold text-cyan-300 mb-3 border-b-2 border-cyan-300/20 pb-2">Careers</h4>
                        <ul className="space-y-1 list-disc list-inside text-slate-200">
                             {Object.entries(character.careers).map(([key, val]) => <li key={key}>{key} <span className="font-bold">{val > 0 ? '+' : ''}{val}</span></li>)}
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-xl font-bold text-cyan-300 mb-3 border-b-2 border-cyan-300/20 pb-2">Obligation</h4>
                        <p className="text-slate-200"><span className="font-bold text-white">{character.obligation}:</span> {OBLIGATIONS[character.obligation]}</p>
                    </div>
                </div>
                 <div>
                    <h4 className="text-xl font-bold text-cyan-300 mb-3 border-b-2 border-cyan-300/20 pb-2">Tags</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <div>
                             <h5 className="text-lg font-semibold text-white">Positive</h5>
                             <ul className="space-y-1 list-disc list-inside text-slate-200">
                                {character.positiveTags.map(tag => <li key={tag}>{tag}</li>)}
                            </ul>
                        </div>
                         <div>
                             <h5 className="text-lg font-semibold text-red-400">Negative</h5>
                             <ul className="space-y-1 list-disc list-inside text-slate-200">
                                {character.negativeTags.map(tag => <li key={tag}>{tag}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                 <button
                    onClick={restart}
                    className="px-8 py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-400 transition"
                >
                    Create Another Character
                </button>
            </div>
        </StepContainer>
    );
};
