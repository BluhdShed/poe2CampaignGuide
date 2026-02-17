// At the very top of json/campaign.js
const campaignData = {
  "walkthrough": [
    {
      "id": "act_1",
      "name": "Act 1",
      "locations": [
        {
          "name": "Riverbank",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Wounded Man, loot and equip your weapon"
            },
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Loot the Large Chests you find and equip the items and skills"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill The Bloated Miller"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Clearfell Encampment behind the boss"
            }
          ]
        },
        {
          "name": "Clearfell Encampment",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Renly to get a Skill Gem Lvl 1 and accept his quest"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Clearfell"
            }
          ]
        },
        {
          "name": "Clearfell",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Beira to loot and use Head of the Winter Wolf for +10% cold resistance"
            },
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Enter Mud Borrows, kill The Devourer for a Random Gem and go back"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Find an Abandoned Stash to get an Skill Gem Lvl 1"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Grelwood"
            }
          ]
        },
        {
          "name": "Grelwood",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Find, summon and talk to Una and the waypoint"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Grim Tangle, take the waypoint and go back"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Red Vale, take the waypoint and go back"
            },
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Kill Gerung, the Brambleghast to get a Skill Gem Lvl 1"
            },
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Find a hut with a Cauldron for flasks and kill Areagne, Forgotten Witch for a Support Gem LvL 1"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Red Vale"
            }
          ]
        },
        {
          "name": "Red Vale",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Find the three Obelisks of Rust and loot Runed Girdle each time (The Rust King will spawn on the last one)"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Clearfell Encampment",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Renly and get Runed Spikes"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Grelwood"
            }
          ]
        },
        {
          "name": "Grelwood",
          "steps": [
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Click on the three Runic Seals"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Una"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Clearfell Encampment",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Una"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Grim Tangle (or to Grelwood to find it if you still haven't)"
            }
          ]
        },
        {
          "name": "Grim Tangle",
          "steps": [
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Kill The Rotten Druid for a Support Gem Lvl 1"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Cemetery of the Eternals"
            }
          ]
        },
        {
          "name": "Cemetery of the Eternals",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Lachlann the Lost"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot the Sarcophagus near a checkpoint for a guaranteed Ring"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Find the Tomb of the Consort, kill Asinia, loot the Key Piece and teleport back"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Find the Mausoleum of the Praetor, kill Draven, loot the Key Piece and teleport back"
            },
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Open the Memorial Gate next to Lachlann"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Lachlann and loot the Ring"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Clearfell Encampment",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Finn, Una and The Hooded One"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Hunting Grounds"
            }
          ]
        },
        {
          "name": "Hunting Grounds",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Delwyn"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill The Crowbell to loot Book of Specialisation, giving two passive points"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Freythorn, take waypoint and go back"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Ogham Farmlands, take waypoint and go back"
            },
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Do the small ritual event near a checkpoint for a Support Gem Lvl 1"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Freythorn"
            }
          ]
        },
        {
          "name": "Freythorn",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Intaract with the three smalls Ritual Altars"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Find the big Ritual Altar to summon and kill The King in the Mists"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Ogham Farmlands"
            }
          ]
        },
        {
          "name": "Ogham Farmlands",
          "steps": [
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Interact with Una's Lute Box in a house near a checkpoint to loot Una's Lute"
            },
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Kill the rare dogs in the crop circle for a Skill Gem Lvl 4"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Ogham village"
            }
          ]
        },
        {
          "name": "Ogham village",
          "steps": [
            {
              "type": "use",
              "is_optional": false,
              "instruction": "(First character) Find the Smithing Tools in a house near a checkpoint to unlock Salvaging Bench"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot the Blacksmith's Chest in the same house for a Blank Rune (with a Lesser Rune as reward in town) and an Artificier's Orb"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill The Executioner"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Go upstairs, use the Lever and talk to Leitis"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Manor Ramparts"
            }
          ]
        },
        {
          "name": "The Manor Ramparts",
          "steps": [
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Click the Rope of the hanging man near a checkpoint for a Support Gem Lvl 1"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Oghman Manor"
            }
          ]
        },
        {
          "name": "Oghman Manor",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Candlemass on the first floor to use Candlemass's Essence for +20 life"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Go downstairs and kill Geonor"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Clearfell Encampment",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to everybody and finally to The Hooded One with \"Follow the Beast's Trail\""
            }
          ]
        }
      ]
    },
    {
      "id": "act_2",
      "name": "Act 2",
      "locations": [
        {
          "name": "Vastriri Outskirts",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Hooded One"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Rathbreaker"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to the start of the zone"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Zarka"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Ardura Caravan"
            }
          ]
        },
        {
          "name": "The Ardura Caravan",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Hooded One and to Sekhema Asala two times"
            },
            {
              "type": "travel",
              "is_optional": false,
              "instruction": "Use the Desert Map to travel to The Halani Gates"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Enter The Halani Gates and talk to Sekhema Asala"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Go back in The Ardura Caravan and talk to Sekhema Asala"
            },
            {
              "type": "travel",
              "is_optional": false,
              "instruction": "Use the Desert Map to travel to Mawdun Quarry and enter it"
            }
          ]
        },
        {
          "name": "Mawdun Quarry",
          "steps": [
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot Faridun War Cache near a checkpoint for an Artificer's Orb"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Mawdun Mine (follow checkpoints)"
            }
          ]
        },
        {
          "name": "Mawdun Mine",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Rudja"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Risu in the cage"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "The Ardura Caravan",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Risu and Sekhema Asala near the desert map"
            },
            {
              "type": "travel",
              "is_optional": false,
              "instruction": "Travel to Traitor's Passage"
            }
          ]
        },
        {
          "name": "Traitor's Passage",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Interact with the Ancient Seal door and the Runic Seals to kill and loot Balbala"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot the Bell Chest in a dead end with gold on ground for random loots"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Halini Gates (follow the stairs up)"
            }
          ]
        },
        {
          "name": "The Halini Gates",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Summon Asala to open the gates"
            },
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Kill the rare in the middle near checkpoint for random loots"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Jamanra"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Take the stairs and search the checkpoint"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "The Ardura Caravan",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Shambrin, Zarka and Sekhema Asala"
            },
            {
              "type": "travel",
              "is_optional": false,
              "instruction": "Travel to Trial of Sekhemas, take the waypoint and do the trial if you can"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            },
            {
              "type": "travel",
              "is_optional": false,
              "instruction": "Travel to Mastodon Badlands"
            }
          ]
        },
        {
          "name": "Mastodon Badlands",
          "steps": [
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot the Effigy near a checkpoint for a Support Gem Lvl 2"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Bone Pits"
            }
          ]
        },
        {
          "name": "The Bone Pits",
          "steps": [
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Kill mobs until you drop Sun Clan Relic"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Iktab & Ekbab and loot Mastodon Tusks"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "The Ardura Caravan",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Zarka"
            },
            {
              "type": "travel",
              "is_optional": false,
              "instruction": "Travel to Keth"
            }
          ]
        },
        {
          "name": "Keth",
          "steps": [
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Kill mobs until you drop Kabala Clan Relic"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Enter Stairs near checkpoint for random valuable loots"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Kabala and use the looted Book of Specialisation for two passive points"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Lost City"
            }
          ]
        },
        {
          "name": "The Lost City",
          "steps": [
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Kill The Ninth Treasure of Keth near a checkpoint for random valuable loots"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot the Tomb near a checkpoint for a Spirit Gem Lvl 7"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Buried Shrines"
            }
          ]
        },
        {
          "name": "Buried Shrines",
          "steps": [
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot the guarded sarcophagus for a Support Gem"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Choose an Offering of water/fire/lightning for corresponding ring"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Heart of Keth"
            }
          ]
        },
        {
          "name": "The Heart of Keth",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Azarian"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Water Goddess behind the boss, click on Everburning Cinders and Ignite the Goddess"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "The Ardura Caravan",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Zarka"
            },
            {
              "type": "travel",
              "is_optional": false,
              "instruction": "Travel to Valley of the Titans"
            }
          ]
        },
        {
          "name": "Valley of the Titans",
          "steps": [
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Find three Ancient Seals"
            },
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Interact with the Medallion near the waypoint, place the two relics from earlier and choose a boon"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Unlock and enter The Titan Grotto near a checkpoint"
            }
          ]
        },
        {
          "name": "The Titan Grotto",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Zalmarath and loot The Flame Ruby"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "The Ardura Caravan",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Zarka and Sekhema Asala"
            },
            {
              "type": "travel",
              "is_optional": false,
              "instruction": "Travel to Hilani Gates but don't enter the zone"
            },
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Sound the Horn at the top of the caravan"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Sekhema Asala"
            },
            {
              "type": "travel",
              "is_optional": false,
              "instruction": "Travel to Deshar"
            }
          ]
        },
        {
          "name": "Deshar",
          "steps": [
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Find and loot Fallen Dekhara, generally near a tower"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Path of Mourning"
            }
          ]
        },
        {
          "name": "Path of Mourning",
          "steps": [
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Spires of Deshar"
            }
          ]
        },
        {
          "name": "The Spires of Deshar",
          "steps": [
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Interact with Sisters of Garukhan for +10% lightning resistance"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Tor Gul"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "The Ardura Caravan",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Sekhema Asala"
            },
            {
              "type": "travel",
              "is_optional": false,
              "instruction": "Travel to The Dreadnought"
            }
          ]
        },
        {
          "name": "The Dreadnought",
          "steps": [
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Dreadnought Vanguard"
            }
          ]
        },
        {
          "name": "Dreadnought Vanguard",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Jamara"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "The Ardura Caravan",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Exit the caravan on top left to talk to The Hooded One and wait for the animation"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Go back to talk to Sekhema Asala and choose \"Travel to the Sandswept Marsh\""
            }
          ]
        }
      ]
    },
    {
      "id": "act_3",
      "name": "Act 3",
      "locations": [
        {
          "name": "Sandswept March",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Hooded One"
            },
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Kill Rootdredge for a Skill Gem Lvl 9"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot the Basket from Orok Campsite for a Lesser Jeweller's Orb"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot the corpse from the hanging tree for a random magic ring"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Ziggurat Encampment"
            }
          ]
        },
        {
          "name": "Ziggurat Encampment",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Alva, Oswald and The Hooded One"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Jungle Ruins on top"
            }
          ]
        },
        {
          "name": "Jungle Ruins",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Silverfist for a Book of Specialisation"
            },
            {
              "type": "wp",
              "is_optional": false,
              "instruction": "Find waypoint near The Venom Crypts"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Infested Barrens"
            }
          ]
        },
        {
          "name": "Infested Barrends",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Find and talk to Alva and take the waypoint near her"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Chimera Wetlands, take waypoint and go back"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Azak Bog, take waypoint and go back"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Venom Crypts"
            }
          ]
        },
        {
          "name": "The Venom Crypts",
          "steps": [
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Find a Corpse to loot Corpse-snake Venom"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Ziggurat Encampment",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Servi"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Chimeral Wetlands"
            }
          ]
        },
        {
          "name": "Chimeral Wetlands",
          "steps": [
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Temple of Chaos, take the waypoint and go back (this is the second ascension zone)"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Xyclucian, the Chimera and loot Chimeral Inscribed Ultimatum"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Jiquani's Machinarium behind the boss"
            }
          ]
        },
        {
          "name": "Jiquani's Machinarium",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Summon and talk to Alva"
            },
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Loot the Small Soul Core and use it on the Sone Altar next to Alva"
            },
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Loot three Small Soul Cores to open doors"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Open a door to kill Blackjaw and use The Flame Core for +10% fire res"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Open a door to enter Jiquani's Sanctum"
            }
          ]
        },
        {
          "name": "Jiquani's Sanctum",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Summon and talk to Alva"
            },
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Loot two Medium Soul Cores and place them in the Generators"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Go back at the beginning, click the Large Soul Core, kill Zicoatly and loot the core"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Infested Barrens"
            }
          ]
        },
        {
          "name": "Infested Barrens",
          "steps": [
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Use the core on the Stone Altar next to the waypoint"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Matlan Waterways"
            }
          ]
        },
        {
          "name": "The Matlan Waterways",
          "steps": [
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Go to the hut and kill the rare for random loot"
            },
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Use the big Canal Lever at the end of the zone"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Ziggurat Encampment",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Go downstairs to talk to Alva"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Drowned City on the bottom"
            }
          ]
        },
        {
          "name": "The Drowned City",
          "steps": [
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Find Apex of Filth, take the waypoint and go back"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Find The Molten Vault, take the waypoint and go back"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Azak Bog"
            }
          ]
        },
        {
          "name": "Azak Bog",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Summon and talk to Servi"
            },
            {
              "type": "use",
              "is_optional": true,
              "instruction": "Activate Flameskin rituals you encounter for fire resistance and rarity for the rest of the zone"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Ignagduk, loot the Spear and use his Gemrot Skull for +30 spirit"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to The Molten Vault if it's your first character or to town otherwise"
            }
          ]
        },
        {
          "name": "The Molten Vault",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "(First character) Kill Mektul to unlock the Reforging Bench"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Ziggurat Encampment",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Oswald"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Apex of Filth"
            }
          ]
        },
        {
          "name": "Apex of Filth",
          "steps": [
            {
              "type": "use",
              "is_optional": true,
              "instruction": "If you find three Mushrooms, use them on the Cauldron for random superior flasks"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill The Queen of Filth to get Temple Door Idol"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Ziggurat Encampment",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Alva downstairs"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Interact with the Door behind her to enter Temple of Kopec"
            }
          ]
        },
        {
          "name": "Temple of Kopec",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Ketzuli, High Priest of the Sun upstairs"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Alva and wait for lore"
            }
          ]
        },
        {
          "name": "Ziggurat Encampment",
          "steps": [
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Take the Gateway"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Go downstairs to enter Utzaal"
            }
          ]
        },
        {
          "name": "Utzaal",
          "steps": [
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot Sacrificial Heart on magic/rare mobs. Can also drop in the next zone."
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "You can go in small doors to find idols which can be traded for gold with Oswald in town"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Viper Napuatzi"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Aggorat"
            }
          ]
        },
        {
          "name": "Aggorat",
          "steps": [
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Use the Sacrificial Heart on the altar (on top right of the map) and stab it with the Dagger for two passive points"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Black Chambers (on top left of the map)"
            }
          ]
        },
        {
          "name": "The Black Chambers",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Doryani"
            },
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Wait for the loot (30 seconds)"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Ziggurat Encampment",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Doryani"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Doryani again, then Alva, then The Hooded One, and finally Alva"
            }
          ]
        }
      ]
    },
    {
      "id": "act_4",
      "name": "Act 4",
      "locations": [
        {
          "name": "Kingsmarch",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Doryani"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Continue and talk to Alva to get the reward"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Continue and talk to Rog in the house"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Makoru on the boat and choose a destination"
            },
            {
              "type": "info",
              "is_optional": false,
              "instruction": "This act is not linear. This section is a suggestion."
            }
          ]
        },
        {
          "name": "Whakapanu",
          "steps": [
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Find the Shark Pit, approach the water and kill The Great One"
            },
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Find the cavern and kill the rare to loot a Support Gem Lvl 4"
            },
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Find and loot the Pretrified Pirate"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Singing Caverns"
            }
          ]
        },
        {
          "name": "Whakapanu - The Singing Caverns",
          "steps": [
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Find the Beckoning Clam, kill the rare and loot the Humming Pearl"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Diamora, Song of Death"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Hooded One"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Kingsmarch",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Ange and travel to Shoreline Hideout"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Clear the Hideout"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Ange"
            }
          ]
        },
        {
          "name": "Shrike Island",
          "steps": [
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot the Corpse Nest"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Scourge of the Skies"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Hooded One"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Abandoned Prison",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Slay monsters until Chapel Key drop"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Open the Chapel Door, kill the rares and select a flask boon"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Solitary Confinement"
            }
          ]
        },
        {
          "name": "Abandoned Prison - Solitary Confinement",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill The Prisoner"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Hooded One"
            }
          ]
        },
        {
          "name": "Isle of Kin",
          "steps": [
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Find and loot the Flayed Sailor"
            },
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Kill Mimbok the Enslaved in a pen for a Skill Gem Lvl 12 and Support Gem Lvl 4"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill The Blind Beast in an arena for 2 passive points"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Volcanic Warrens"
            }
          ]
        },
        {
          "name": "Isle of Kin - Volcanic Warrens",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Krutog, Lord of Kin"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Kedge Bay",
          "steps": [
            {
              "type": "info",
              "is_optional": false,
              "instruction": "This island is fully optional"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Find and loot the Dead Man's Chest"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Journey's End"
            }
          ]
        },
        {
          "name": "Kedge Bay - Journey's End",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Tujen"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Captain Harlin and loot the Verisium"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Teleport at the beginning and talk to Freya Hartlin"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to town"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Dannig and get Versium Spikes"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to Journey's End"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Freya Harlin"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Click on a totem, do the encounter and kill Omniphobia"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Eye of Hinekora",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Matiki and click on the well"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot the chest behind the waterfall for a Skill Gem Lvl 12"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Do all tests: Fire, Nature and Cold"
            },
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Find the Silent Hall and an altar to Pay your Respects, than talk to Navali"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Hall of the Dead"
            }
          ]
        },
        {
          "name": "Eye of Hinekora - Hall of the Dead",
          "steps": [
            {
              "type": "loot",
              "is_optional": false,
              "instruction": "Loot the Blank Tattoos from the 3 tests"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Fight Yama the White and loot the Silver Coin"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Trial of the Ancestors"
            }
          ]
        },
        {
          "name": "Eye of Hinekora - Trial of the Ancestors",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Navali to get the Tattoo"
            },
            {
              "type": "info",
              "is_optional": false,
              "instruction": "This zone will contain the third way to get ascendency points in a future game version"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Plunder's Point",
          "steps": [
            {
              "type": "info",
              "is_optional": false,
              "instruction": "This island is optional and available when you have all four torn map pieces. You have to talk to Makuro with the \"Map treasure\" lines to unlock the island."
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Danning"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Do the expedition encounter by placing explosives"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Arasthas",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Talk to Missionari Lorandis, follow him, get out and destroy the shield"
            },
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Loot the Evening Bell and Morning Bell to loot currency items"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Torvian, Hand of the Saviour (bait the rock throws to the (npc)s)"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter the Excavation"
            }
          ]
        },
        {
          "name": "Arasthas - Excavation",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Benedictus, First Heral of Utopia"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Continue for lore then talk to The Hooded One"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "Ngakanu",
          "steps": [
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Heart of the Tribe"
            }
          ]
        },
        {
          "name": "Ngakanu - Heart of the Tribe",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Tavaki"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Tavaki"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        }
      ]
    },
    {
      "id": "interlude_1",
      "name": "Interlude 1",
      "locations": [
        {
          "name": "Ogham",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Hooded One and select \"Travel to Ogham\""
            }
          ]
        },
        {
          "name": "The Refuge",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Hooded One, Renly and Finn"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Scorched Farmlands at the bottom"
            }
          ]
        },
        {
          "name": "Scorched Farmlands",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Isolde of the White Shroud and Heldra of the Black Pyre"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Stones of Serles"
            }
          ]
        },
        {
          "name": "Stones of Serle",
          "steps": [
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Go around the map to activate the six Runed Monoliths"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Siora, Blade of the Mists in the middle of the map"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Una"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Go back to Scorched Farmlands"
            }
          ]
        },
        {
          "name": "Scorched Farmlands",
          "steps": [
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Find The Blackwood where there was darkness before if you found it"
            }
          ]
        },
        {
          "name": "The Blackwood",
          "steps": [
            {
              "type": "use",
              "is_optional": true,
              "instruction": "Find Omen Altars to get Omen items for gambling"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Holten"
            }
          ]
        },
        {
          "name": "Holten",
          "steps": [
            {
              "type": "kill",
              "is_optional": true,
              "instruction": "Kill Sigbert of the Sullied Oath and Godwin of the Shattered Creed (doesn't reward anything special)"
            },
            {
              "type": "npc",
              "is_optional": true,
              "instruction": "In the middle of the map, Soul of the Ferryman sells a bunch of Greater Runes fairly cheap"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Wolvenhold, take the waypoint and go back"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Holden Estate, take the waypoint and go back"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Wolvenhold"
            }
          ]
        },
        {
          "name": "Wolvenhold",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Oswin, the Dread Warden to loot an item giving two passive points"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Holden Estate"
            }
          ]
        },
        {
          "name": "Holden Estate",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Thane Wulfric and Lady Elyswyth"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "The Refuge",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Renly"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Hooded One and \"Travel to the Vastiri\""
            }
          ]
        }
      ]
    },
    {
      "id": "interlude_2",
      "name": "Interlude 2",
      "locations": [
        {
          "name": "The Kaari Bazar",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Sekhema Asala then Zarka then Risu"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter The Khari Crossing"
            }
          ]
        },
        {
          "name": "The Khari Crossing",
          "steps": [
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Enter the Skullmaw Stairway (north) and use the Molten One's Gift for +5% life"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Akthi, the Final Sting and Anundr, the Sandworm"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Find Pools of Khatal, get waypoint and go back"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Find Galai Gates, get waypoint and go back"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "The Kaari Bazar",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Risu for two passive points"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Pools of Khatal"
            }
          ]
        },
        {
          "name": "Pools of Khatal",
          "steps": [
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Sel Khari Sanctuary"
            }
          ]
        },
        {
          "name": "Sel Khari Sanctuary",
          "steps": [
            {
              "type": "use",
              "is_optional": true,
              "instruction": "Find Yoon's Barya and Rangeen's Barya and place them in their pedestrals for 2 rare items"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Elzarah, the Cobra Lord"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Sekhema Asala"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to The Galai Gates"
            }
          ]
        },
        {
          "name": "The Galai Gates",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Vornas, the Fell Flame"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Qimah"
            }
          ]
        },
        {
          "name": "Qimah",
          "steps": [
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Find the Orbala's Pillar to choose a changeable buff"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Jado"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Qimah Reservoir"
            }
          ]
        },
        {
          "name": "Qimah Reservoir",
          "steps": [
            {
              "type": "use",
              "is_optional": true,
              "instruction": "Use the Vials of Sacred Water you randomly loot here in the Sacred Wells for random currency item"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Azmadi, the Faridun Prince"
            },
            {
              "type": "use",
              "is_optional": false,
              "instruction": "Click on Grand Barya"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Jado"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport back to town"
            }
          ]
        },
        {
          "name": "The Refuge",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Hooded One and select \"Travel to Mount Kriar\""
            }
          ]
        }
      ]
    },
    {
      "id": "interlude_3",
      "name": "Interlude 3",
      "locations": [
        {
          "name": "The Glade",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to everyone"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Ashen Forest"
            }
          ]
        },
        {
          "name": "Ashen Forest",
          "steps": [
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "Interact with Ancien Monument for a Skill Gem Lvl 14"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Kriar Village"
            }
          ]
        },
        {
          "name": "Kriar Village",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Lythara to loot and use Gemcrust Skull for +40 Spirit and a Spirit Gem Level 14"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Glacial Tarn"
            }
          ]
        },
        {
          "name": "Glacial Tarn",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Enter Howling Caves, kill The Abominable Yeti, loot Icy Tusks and go back"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Rakkar"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Kriar Peaks"
            }
          ]
        },
        {
          "name": "Kriar Peaks",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Elder Madox for a free unique item"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Etched Ravine"
            }
          ]
        },
        {
          "name": "Etched Ravine",
          "steps": [
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Stormgore"
            },
            {
              "type": "door",
              "is_optional": false,
              "instruction": "Enter Cuachic Vault"
            }
          ]
        },
        {
          "name": "The Cuachic Vault",
          "steps": [
            {
              "type": "loot",
              "is_optional": true,
              "instruction": "You can loot Small soul cores to use on Altars to open vaults with random loots"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Kill Zelina and Zolin"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Summon and talk to Doryani"
            },
            {
              "type": "tp",
              "is_optional": false,
              "instruction": "Teleport to Kingsmarch in Act 4"
            }
          ]
        },
        {
          "name": "Kingsmarch",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to The Hooded One, take reward and \"Travel to Oriah\""
            }
          ]
        },
        {
          "name": "The Ziggurat Refuge",
          "steps": [
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Alva"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk to Doryani"
            },
            {
              "type": "info",
              "is_optional": false,
              "instruction": "Welcome to Endgame!"
            },
            {
              "type": "kill",
              "is_optional": false,
              "instruction": "Do your first map"
            },
            {
              "type": "npc",
              "is_optional": false,
              "instruction": "Talk Doryani"
            }
          ]
        }
      ]
    }
  ]

}
