var storyContent = ﻿{"inkVersion":20,"root":[[{"#":"author: Douglas McIntosh"},{"#":"title : Pip's Perfect Life"},{"->":"Start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Start":[["^This is where the game will start.","\n","^Please insert basic introductory stuff about how the game works. Start with a simple test of Rangers or Celtic. Make the wrong choice funny and return to the start. Remove the wrong option on the return.","\n","^We'll start with a simple choice.","\n","^What team do we want to select?","\n","ev","str","^Green","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Blue","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^I'm not sure this is the correct choice. ",{"->":"Start"},"\n",{"#f":5}],"c-1":["\n",[["^Are you certain?","\n","ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Ok then ",{"->":"Introduction"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Start"},"\n",{"#f":5}],"#f":5,"#n":"g-0"}],null],{"#f":5}]}],{"#f":1}],"Introduction":[["^Welcome to Pip's Perect Life.","\n","^YOU are the hero, or heroine!","\n","ev","str","^Yes!","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No!","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ","\n",{"->":".^.^.^.aaa"},{"#f":5}],"c-1":["^ ","\n",{"->":".^.^.^.aaa"},{"#f":5}]}],{"aaa":[["^Well not quite.","\n","^PIP is the hero, or heroine!","\n","ev","str","^Yes!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.^.bbb"},{"#f":5}]}],{"#f":1}],"bbb":[["^Movie science teaches us that we live in a Multiverse where every choice matters and leads to a variety of endings. Some good, some ... not.","\n","^In this game we will explore the Pipverse and help her find a Happy Ending.","\n","ev","str","^Content Warning","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.^.ccc"},{"#f":5}]}],{"#f":1}],"ccc":[["^This game contains Pips, many Pips.","\n",["ev",{"^->":"Introduction.ccc.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.","/str","/ev",{"*":".^.^.c-0","flg":22},{"s":["^I'm ready",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Introduction.ccc.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^ to explore the Pipiverse!","\n",{"->":"FirstJob"},{"#f":5}]}],{"#f":1}],"#f":1}],"FirstJob":[["^Pip's bedroom.","\n","^Pip is lying on her bed, idly kicking her legs in the air and chewing on the end of a pen. She is flipping her way through job vacancies in the Fife Herald.","\n","^She has circled three potential jobs, all at a local hotel serving the needs of well off golfers visiting St Andrews. The Glenbeagles.","\n",["ev",{"^->":"FirstJob.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^The Glenbeagles?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"FirstJob.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","^Name changed for legal reasons. It's a large posh hotel.","\n","^Pip has circled three options.","\n","^A waitress in the resturaunt.","\n","^A therapist at the spa.","\n","^A maid, working room service.","\n",{"->":".^.^.^.jobchoice"},{"#f":5}]}],{"jobchoice":[[["ev",{"^->":"FirstJob.jobchoice.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Waitress",{"->":"$r","var":true},null]}],["ev",{"^->":"FirstJob.jobchoice.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Therapist",{"->":"$r","var":true},null]}],["ev",{"^->":"FirstJob.jobchoice.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Maid",{"->":"$r","var":true},null]}],{"*":".^.c-3","flg":24},{"c-0":["ev",{"^->":"FirstJob.jobchoice.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["^Do you want Pip to be working in a cute waitress outfit?","\n","ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"First_Waitress"},{"->":".^.^.^.g-1"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^Cute waitress Pip has been rejected.","\n",{"->":".^.^.^.^.^"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"FirstJob.jobchoice.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",[["^Do you want to see Pip massaging muscular calfs?","\n","ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No!","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"First_Therapist"},{"->":".^.^.^.g-1"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^Hands on Pip rejected.","\n",{"->":".^.^.^.^.^"},{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"FirstJob.jobchoice.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",[["^Do you want to see Pip in a frilly maid's uniform?","\n","ev","str","^Oh yes!","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No?","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"First_Maid"},{"->":".^.^.^.g-1"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^Frilly Pip has been rejected.","\n",{"->":".^.^.^.^.^"},{"#f":5}]}],{"#f":5}],"c-3":[{"->":"nullending"},"\n",{"#f":5}]}],{"#f":1}],"#f":1}],"First_Waitress":[{"#":"Waitress Job"},"done",{"#f":1}],"First_Therapist":[{"#":"Therapist Job"},"^With her muscular physique and bright, engaging manner Pip has become a popular Spa Therapist.","\n","^Always professional but still popular with the clients that like a little ... extra.","\n","^In return to ironing the modesty towels Pip has is allowed to pick her first job of the day.","\n",{"->":".^.firstspajob"},{"firstspajob":[["ev","str","^Work perk massage","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Fumigate the Sauna","/str","/ev",{"*":".^.c-1","flg":20},{"*":".^.c-2","flg":24},{"c-0":["\n",[["^One of kitchen staff has won a voucher for a massage. Go for it?","\n","ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"scottcalfs"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.^.^.^"},{"#f":5}],"#f":5,"#n":"g-0"}],null],{"#f":5}],"c-1":["\n",[["^Are you sure, this sounds ... sticky?","\n","ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":".^.^.^.^.^.^.^.spafungus"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.^.^.^"},{"#f":5}],"#f":5,"#n":"g-0"}],null],{"#f":5}],"c-2":[{"->":".^.^.^.^.indecision"},"\n",{"#f":5}]}],{"#f":1}],"indecision":[["^One of the jobs has to be picked","\n","ev","str","^Work perk massage","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Fumigate the Sauna","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Dither further","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n",{"->":"scottcalfs"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.^.spafungus"},{"#f":5}],"c-2":["\n",{"->":"nullending"},{"#f":5}]}],{"#f":1}],"spafungus":[[{"#":"Find the cure for baldness but end up with a beard."},"^Pip puts on her thick rubber gloves and attaches a face mask loosely.","\n","^She takes a deep breath, coughs, then heads towards the men's sauna. The stench today is pretty fruity, agroup of chemistry students from St. Adreanne's University were the last to use it. Heaven knows what they have been up to.","\n",["ev",{"^->":"First_Therapist.spafungus.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^?","/str","/ev",{"*":".^.^.c-0","flg":22},{"s":["^St. Adreanne's University",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"First_Therapist.spafungus.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"^.","\n","^The nearby University. Princess Williamina studied there, now all the posh folk are going.","\n",{"->":".^.^.^.^.sf_williamina"},{"#f":5}]}],{"#f":1}],"sf_williamina":[[["ev",{"^->":"First_Therapist.sf_williamina.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^?","/str","/ev",{"*":".^.^.c-0","flg":22},{"s":["^Princess Williamina",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"First_Therapist.sf_williamina.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^.","\n","^Next in line to the throne. Named after the famous astronomer.","\n",{"->":".^.^.^.^.sf_final_choice"},{"#f":5}]}],{"#f":1}],"sf_final_choice":[["^The sauna stench is still really quite unpleasant.","\n","ev","str","^Go massage calfs instead","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Pip is a woman on a mission. Onwards to the stinky sauna!","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"scottcalfs"},{"#f":5}],"c-1":["\n",{"->":"fungalending"},"done",{"#f":5}]}],{"#f":1}],"#f":1}],"scottcalfs":[["^The work perk winner has won a session with Pip, who wouldn't be delighted? She can't really remember his name maybe Scott? Everyone calls him 'Glaikit'","\n","ev","str","^\"Hey Scott ...\"","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^\"Hey Glaikit ...\"","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",[["^Pip engages in light banter with Scott. He lies face down on the massagge table wearing nothing but a small towel.","\n",{"->":"scottcalfs.post_banter"},{"#f":5,"#n":"g-0"}],null],{"#f":5}],"c-1":["\n",[["^Pip hears the Universe cry out in pain.","\n",{"->":"massage_ending"},{"#f":5,"#n":"g-0"}],null],{"#f":5}]}],{"post_banter":["^Post banter stuff here","\n","done",{"#f":1}],"#f":1}],"First_Maid":[[{"#":"Maid Job"},{"#":"This is the worst choice."},"^Pip has learned the ways of the maid and is super cute in her maid's uniform.","\n","^When cleaning one of the luxury rooms she catches sight, through the window, of a burly chef taking a break outside the back of the kitchens.","\n","ev","str","^Admire his calfs","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Twirl a lock of hair thoughtfully","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Chew on lower lip","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n",[["^They look firm, and rubbable.","\n",{"->":"First_Maid.window"},{"#f":5,"#n":"g-0"}],null],{"#f":5}],"c-1":["\n",[["^Pip twirls her hair around a finger","\n",{"->":"First_Maid.window"},{"#f":5,"#n":"g-0"}],null],{"#f":5}],"c-2":["\n",[["^Pip chews on her lower lip. It's very sexy.","\n",{"->":"First_Maid.window"},{"#f":5,"#n":"g-0"}],null],{"#f":5}]}],{"window":[["^He is very handsome. Very, very handsome.","\n","^Pip thinks his name might be Scott or Gilky?","\n","ev","str","^Lean out window and shout 'Gilky!'","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Lean out window and shout 'Scott!'","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Turn away from the window and get back to work.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n",[["^Pip leans out the window and breathes in ...","\n",{"->":"First_Maid.lean"},{"#f":5,"#n":"g-0"}],null],{"#f":5}],"c-1":["\n",[["^Pip leans out the window and breathes in ...","\n",{"->":"First_Maid.lean"},{"#f":5,"#n":"g-0"}],null],{"#f":5}],"c-2":["\n",{"->":".^.^.^.^.nolean"},{"#f":5}]}],{"#f":1}],"lean":[["^Just as Pip is about to shout she becomes aware of apresence behind her and a hand placed upon her bottom.","\n","^She pulls herself back into the room quickly, catching the back of her head and causing the window to slam down. She turns to see a guest with jaundiced eyes and suffering from halitosis leering at her.","\n","^The word submit does not exist in Pip's dictionary because she is a Warrior Princess, also she does not own a dictionary.","\n","^If Pip lets this go unchallenged he could do the same to her friends and colleagues.","\n","ev","str","^Poke him in the eyes!","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^A knee apllied to his nuts!","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Headbutt!","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n",[["^A classic two handed finger poke. He collapses to the floor wailing.","\n","ev","str","^Kick!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^Pip follows up with a solid kick to his meat and veg. He whimpers.","\n",{"->":"First_Maid.mmaending"},"ev","str","^Stomp!","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^Pip brings her foot down, hard! Reducing his chance of fathering children.","\n",{"->":"First_Maid.mmaending"},{"#f":5}]}],{"#f":5}],"c-1":["\n",[["^He is lifted a few inches into the air. All fight and perversion leaving his body in an instant. He collapses to the floor making high pitched keening noises.","\n",{"->":"First_Maid.mmaending"},{"#f":5,"#n":"g-0"}],null],{"#f":5}],"c-2":["\n",[["^Making her own eyes water Pip delivers a knockout blow. He drops instantly with almost visible stars circling his bed. Rubbing her forehead Pip walks out of this job.","\n",{"->":"First_Maid.mmaending"},"done",{"#f":5,"#n":"g-0"}],null],{"#f":5}]}],{"#f":1}],"mmaending":["^Pip was asked to leave her job, despite being morally right. She did receive a handsome pay off to remain quiet about the incident.","\n","^...","\n","^She invests her hush money in wrestling lessons and starts a career as a professional wrestler.","\n","^Her catchphrase is \"Prepare to the Kilked!\" her wrestling name is \"The Pilkinator!\"","\n","^Sadly wrestling Pip's story ends here.","\n","end",{"#f":1}],"nolean":["^Pip turns away from the window and gets back to work.","\n","^As she does so the guest returns to the room.","\n","^Glistening with sweat he stares at Pip with jaundiced eyes. Meeting her stern, unflinching stare he scuttles away to the bathroom.","\n","^...","\n","^Pip sees the handsome chef around work after this. They become good enough friends for her to get am invite to his wedding reception. The invite said 'plus one' but it was only Pip.","\n","^Pip is sad.","\n","end",{"#f":1}],"#f":1}],"fungalending":[[{"#":"This is the point of no return for the fungal ending."},"^Pip's face mask is a little loose.","\n","ev","str","^Reattach face mask","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Just get the job done!","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":".^.^.^.fe_tighten"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.fe_loose"},{"#f":5}]}],{"fe_loose":[["^Pip enters the sauna preapred with an industrial strength toothbrush and a bucket of pine scented bleach.","\n",{"#":"Oesophageal Crintis - Latin for hairy lung, maybe"},"^The stench catches the back of her throat. Her eyes bulge in terror as she feels something unpleasant blocking her away.","\n","^She falls to her knees making a hbigh pitched whining sound!","\n","ev","str","^Try and write a message in sputum and phlegm on the floor","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Use the blunt toothbrush to carry out a self-tracheoctomoy","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":".^.^.^.^.fe_badbadending"},"\n",{"#f":5}],"c-1":["^ ",{"->":".^.^.^.^.fe_badbadending"},"\n",{"#f":5}]}],{"#f":1}],"fe_badbadending":["^There's no time!","\n","^Pip lies on the floor wheezing her last.","\n","^As her struggles weaken and death comes to take her to a better place she faintly hears voice of a colleague having a flirty conversation from the massage parlour.","\n","^Pip is the first victim of Oesophageal Crintis; but not the last.","\n","^Next life wear your safety gear properly!","\n","end",{"#f":1}],"fe_tighten":[["^Pip quickly tightens her mask.","\n","^She begins to scrub at the fungus with her detergent covered toothbrush","\n","^As she does so she notices the fine hairs on the back of her muscular forearms becoming fuller and slightly longer.","\n","ev","str","^Scrub Harder!","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Bottle the fungus and take it to St. Adreannes.'","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",[["^Pip scrubs furiously destroying the fungal contamination.","\n",{"->":"fungalending.fe_scrub_ending"},{"->":".^.^.^.^.g-0"},{"#f":5,"#n":"g-0"}],null],{"#f":5}],"c-1":["\n",[["^Pip bottles some of the fungus and checks the customer records ...","\n",{"->":".^.^.^.^.g-0"},{"#f":5,"#n":"g-0"}],null],{"#f":5}],"g-0":[{"->":".^.^.^.^.fe_hairy_ending"},{"#f":5}]}],{"#f":1}],"fe_scrub_ending":["^Without knowing it Pip has scrubbed away her chance for a happy hirsute future.","\n","end",{"#f":1}],"fe_hairy_ending":["^Pip tracks down the students.","\n","^Together they set up a company with an effective treatment for male pattern baldness. It's even better for lonely Tinder men than Viagara.","\n","^The team make billions.","\n","^Pip lives a long life surrounded by cats, desperate men after her wealth and a glorious head of hair.","\n","^She cen't help but feel she missed out on something though.","\n","end",{"#f":1}],"#f":1}],"massage_ending":["^\"It's Gilkie.\", he says.","\n","^Pip does not think that's much better but the romance is already dead before it had a chance to bloom?","\n","^Maybe she would have had more luck by just trying to remember his name.","\n","end",{"#f":1}],"nullending":["^You have run out of choices and commited a divide by zero error on the multiverse.","\n","^Please restart reality and try again.","\n","end",{"#f":1}],"global decl":["ev","str","^neutral","/str",{"VAR=":"alignment"},"str","^","/str",{"VAR=":"first_job"},"/ev","end",null],"#f":1}],"listDefs":{}};