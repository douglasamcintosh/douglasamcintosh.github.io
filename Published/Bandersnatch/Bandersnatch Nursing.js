var storyContent = ﻿{"inkVersion":18,"root":[["^Welcome to '<b>Choose Your Own Nursing Assessment</b>'.","\n","^For the Netflix generation this is a Bandersnatch Mental State Assessment.","\n","^This is a prototype designed by Douglas McIntosh as part of a project. It is not an official teaching application, nor has it been approved by NHS Fife. The content within has not been reviewed in any meaningful way.","\n","^The target audience is student mental health nurses. You are tasked with carrying out an initial nursing assessment with a new patient.","\n","^No usage data are recorded.","\n","^Constructive advice would be welcomed.","\n","^Certain paths are intentionally limited. In the full version there would be more ways to recover from a poor choice.","\n","^Please email me at douglas[at]nhs.net","\n","ev","str","^Start the game.","/str","/ev",{"*":"0.c-0","flg":20},"ev","str","^I've already played, I Have questions.","/str","/ev",{"*":"0.c-1","flg":20},{"c-0":["\n","^That's a nice positive attitude. Let's get going.","\n",{"->":"Introduction"},{"->":"0.g-0"},{"#f":7}],"c-1":["\n",{"->":"FAQ"},{"->":"0.g-0"},{"#f":7}],"g-0":["done",{"#f":7}]}],"done",{"Introduction":[["^<h2>Introduction</h2>","\n","^At each stage you will be asked to make a choice. Please remember the situation you are in and what your role is.","\n","^Each choice will be graded and given a score. The best score is 50, anything less than zero is regarded as a failure.","\n","^Good luck nurse!","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"initial_assessment"},"done",{"#f":7}]}],{"#f":3}],"initial_assessment":[["^<h2>Alex</h2>","\n","^Alex has been referred to the hospital by his GP for an assessment.","\n","^The GP letter explains that Alex has recently moved to the area following separating from his partner. The GP was concerned about some quite negative statements Alex made during their discussion and has asked for a more in depth assessment at your department.","\n","^Alex is also complaining of a number of physical problems including a lack of energy and palpitations. No significant issues were found after a physical.","\n","^He is on amitryptiline for neuralgia.","\n","^You have been allocated the task of assessing Alex and deciding what should best be done. There is a duty doctor but she is currently busy elsewhere.","\n","^Things are hectic just now and time is limited so you probably better get cracking.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"initial_assessment_2"},{"#f":7}]}],{"#f":3}],"initial_assessment_2":[["^Alex is middle aged, smartly dressed and glances at you as you enter the room.","\n","^He greets you nervously.","\n","^Talking quickly he says he wishes he had never gone to the GP, especially if it was going to result in all this fuss.","\n","^<i>\"I only went to the doctor to get something for my pain and to help me sleep. Then she asked me to come here and be seen by you lot!</i>","\n","^You wait.","\n","^<i>\"She asked if I had been feeling depressed. I said yes, who wouldn't after their marriage broke down? There's nothing wrong with me, I'm not mad, I shouldn't be in a place like this.\"</i>","\n","^Alex looks down at the floor. He takes a deep breath.","\n","^<i>\"She even asked if I wanted to kill myself! I said no, I said no!\"</i>","\n","^Alex's denial is quite intense.","\n","ev","str","^Alex is nervous, introduce yourself and explain what you're going to do.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^ Alex is lying about suicidal thoughts, ask the duty doctor to attend.","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Time is pressing, best to explore the GP's concerns about Alex's mood.","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^You introduce yourself to Alex and explain that you're going to carry out a brief assessment of what is happening in his life to see if the service can be of any help.","\n","^Alex appears a little more relaxed.","\n","ev",{"VAR?":"score"},10,"+",{"temp=":"score","re":true},"/ev",{"->":"03_mood_assessment.good"},{"#f":7}],"c-1":["\n","^You explain to Alex that you have concerns about his safety and that you would like the doctor to carry out the assessment.","\n","ev",{"VAR?":"score"},10,"-",{"temp=":"score","re":true},"/ev",{"->":"03_mood_assessment.bad"},{"#f":7}],"c-2":["\n","^Leaning forward you tell Alex that the GP was quite concerned about some of the things he had been saying.","\n",{"->":"03_mood_assessment.median"},"done",{"#f":7}]}],{"#f":3}],"03_mood_assessment":[{"->":".^.good"},{"good":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^Alex says he has felt more and more depressed since his divorce. While it was by joint agreement it has been a very stressful process.","\n","^<i>\"Since the divorce I've lost interest in my hobbies. I used to love spending time in the garden, now I just look at it and think of all the work there is to be done. I'm just at a loose end and have no idea what to do with myself.\"</i>","\n","^Alex talks about the marriage breakdown and feeling low. The two initially seemed inextricably linked.","\n","^With a little more questioning Alex admits to feeling quite low before his divorce.","\n","^The words are hesitant. You make use of open questions and silence to encourage Alex. He seems to cope better when you are forced to ask more concrete questions.","\n","ev","str","^Alex's mental state merits further exploration.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Alex is not used to discussing his emotions, some practical advice would be best.","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^The divorce is clearly at the root of Alex's issues, this should be explored.","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^You ask Alex to describe what he is feeling. Trying to encourage him to open up and unburden himself.","\n","ev",{"VAR?":"score"},10,"+",{"temp=":"score","re":true},"/ev",{"->":"03_mood_assessment_mood.mood"},{"#f":7}],"c-1":["\n","^Making direct eye contact with Alex you discuss support groups for men and the recently divorced.","\n","ev",{"VAR?":"score"},10,"-",{"temp=":"score","re":true},"/ev",{"->":"03_mood_assessment_mood.fail"},{"#f":7}],"c-2":["\n","^Taking a deep breath you being to explore the breakdown of Alex's relationship.","\n",{"->":"03_mood_assessment_mood.divorce"},"end",{"#f":7}]}],{"#f":3}],"median":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^Alex says he has felt more and more depressed since his divorce. While it was by joint agreement it has been a very stressful process.","\n","^<i>\"Since we split up it's just been going from bad to worse. We've been togetherâ€¦ were together for years and now I just don't know what to do with myself. Everything just feels flat and nothing I do really seems to matter.\"</i>","\n","^Alex continues at length discussing his relationship and it's eventual breakdown.","\n","^He is not very specific on the details but you get the impression he feels he is at fault.","\n","^<i>\"If she had told me earlier I'm sure I could have changed.\"</i>","\n","^The words are hesitant. You make use of open questions and silence to encourage Alex. He seems to cope better when you are forced to ask more concrete questions.","\n","ev","str","^Alex is not used to discussing his emotions, some practical advice would be best.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Alex's mental state merits further exploration.","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^The divorce is clearly at the root of Alex's issues, this should be explored.","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Making direct eye contact with Alex you discuss support groups for men and the recently divorced.","\n","ev",{"VAR?":"score"},10,"-",{"temp=":"score","re":true},"/ev",{"->":"03_mood_assessment_mood.fail"},{"#f":7}],"c-1":["\n","^You ask Alex to describe what he is feeling. Trying to encourage him to open up and unburden himself.","\n","ev",{"VAR?":"score"},5,"+",{"temp=":"score","re":true},"/ev",{"->":"03_mood_assessment_mood.mood"},{"#f":7}],"c-2":["\n","^Taking a deep breath you being to explore the breakdown of Alex's relationship.","\n",{"->":"03_mood_assessment_mood.divorce"},"end",{"#f":7}]}],{"#f":3}],"bad":[["^You share your concerns with one of your colleagues and ask that they get the doctor to come as soon as she can.","\n","^Alex stares at you clearly alarmed.","\n","^<i>\"I just told you there was nothing wrong with me and you getting the shrink to see me!\"</i>","\n","^The doctor arrives after a few minutes and starts asking questions after the briefest of introductions.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.^.bad2"},{"#f":7}]}],{"#f":3}],"bad2":[["^Alex clams up and shares very little. Stating that he had been quite distressed when speaking to his GP and that he was now much calmer.","\n","^The minimal responses from Alex raise no specific concerns that must be acted upon.","\n","^After wrapping up the interview Alex ignores your suggestion that he contact his GP in event of any future problems.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.^.bad3"},{"#f":7}]}],{"#f":3}],"bad3":["^Some weeks after your assessment you find that Alex has been admitted, via A&E, after an overdose of prescribed medication.","\n","^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","end","done",{"#f":3}],"#f":3}],"03_mood_assessment_mood":[{"->":".^.mood"},{"mood":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^Alex is visibly uncomfortable discussing his mood but eventually opens up.","\n","^<i>\"It's been going badly for a while. Since the marriage failed it has actually managed to get worse.\"</i>","\n","^Alex's next words come out in a hurry. You try and guide the flow of information.","\n","^<i>\"I just can't sleep anymore, that's why I went to the doctor. I get to bed my head hits the pillow then I'm wide awake. I try to get to sleep. Then it is five in the morning and I'm staring at my ceiling wide awake but drained.\"","\n","^<i>\"The tiredness is making harder for me to concentrate during the day.\"</i>","\n","^<i>\"I don't enjoy eating any more, my clothes don't fit me that well. My stomach feels like it is churning all the time. I think I've probably lost some weight. Which would have cheered up my wife.\"</i>","\n","^<i>\"Most of the family friends turned out to be my wife's friends. I don't see people so much. My pain is getting worse and the amitriptyline is not helping anymore. It used to help me sleep.  I was trying to get that reviewed by the GP, but she sent me here to waste your time instead!\"</i>","\n","^<i>\"The chest pains are a bit concerning now I think about it. The GP did not seem worried!\"</i>","\n","^Alex looks at you.","\n","^<i>\"Frankly it's all a bit shit, but what can you do?\"</i>","\n",["ev",{"^->":"03_mood_assessment_mood.mood.0.27.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Constant pain is going to make anyone feel worse. Focus on the physical things first.",{"->":"$r","var":true},null]}],["ev",{"^->":"03_mood_assessment_mood.mood.0.28.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Alex's issues are probably related to his social isolation. This should be discussed in more depth.",{"->":"$r","var":true},null]}],["ev",{"^->":"03_mood_assessment_mood.mood.0.29.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Alex's low mood should probably be further explored.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"03_mood_assessment_mood.mood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.27.s"},[{"#n":"$r2"}],"\n","^You can't expect Alex's mood to improve while he is in so much discomfort. Lets look for practical solutions.","\n","ev",{"VAR?":"score"},10,"-",{"temp=":"score","re":true},"/ev",{"->":"04_further_assessment.physical"},{"#f":7}],"c-1":["ev",{"^->":"03_mood_assessment_mood.mood.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.28.s"},[{"#n":"$r2"}],"\n","^Many of Alex's problems occurred after the divorce when he became socially isolated. You decide to explore this further.","\n",{"->":"04_further_assessment.social"},{"#f":7}],"c-2":["ev",{"^->":"03_mood_assessment_mood.mood.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.29.s"},[{"#n":"$r2"}],"\n","^You are concerned by the tone of what Alex has said. You decide to explore his mood further.","\n","ev",{"VAR?":"score"},10,"+",{"temp=":"score","re":true},"/ev",{"->":"04_further_assessment.risk"},"done",{"#f":7}]}],{"#f":3}],"divorce":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^You gently encourage Alex to talk about the breakdown of the relationship between him and his wife.","\n","^Alex describes how they have been drifting apart for years and he never really put any effort into the marriage. Eventually they realised that things were not working out and she announced, out of the blue, that she wanted a divorce.","\n","^It was finalised some months ago and since then 'everything' has just got worse.","\n","^<i>\"I just don't know what I'm meant to do with myself anymore. I used to look after the upkeep of the house and do the gardening. Now I just don't do anything.\"</i>","\n","ev","str","^Time to discuss Alex's mood at more length.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":".^.^.^.^.mood"},"done",{"#f":7}]}],{"#f":3}],"fail":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^For a moment he looks like he is about to say something, then sits back and starts listening to your suggestions.","\n","^After a little while the duty doctor comes in.","\n","^After a brief introduction, she checks where you're up to and then continues with the assessment.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.^.fail2"},{"#f":7}]}],{"#f":3}],"fail2":[["^Alex relates everything to the breakdown of his marriage and feels that he just needs a little more time.","\n","^The assessment does not really go anywhere as Alex keeps discussing his ex-wife.","\n","^He returns home and is advised to contact his GP again in the event of further problems.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.^.^.fail3"},{"#f":7}]}],{"#f":3}],"fail3":["^Some weeks after your assessment you find that Alex has been admitted, via A&E, after an overdose of prescribed medication.","\n","^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","done",{"#f":3}],"#f":3}],"04_further_assessment":[{"->":".^.risk"},{"risk":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^<i>\"I just can't really work out what I'm for now. Having my wife about helped give me a purpose. The kids live too far away and don't need me hanging around being a burden on them.\"</i>","\n","^Alex talks at some length about how black everything seems.","\n","^He describes a poor intra family relationship. His children are often 'too busy' to visit him and they have not been in touch since the marriage ended. Alex seems to blame himself for this rather than his children.","\n","^You ask about his alcohol intake.","\n","^<i>\"I'm not an alcoholic. I normally only have a pint or two in the pub at the weekends.\"</i>","\n","^You gently press Alex about his drinking, asking the same question in a slightly different manner. Depending on which answer you accept Alex is drinking somewhere between an odd pint at the weekend or as much as twenty pints per week. Asking about spirits gives an unconvincing denial.","\n",["ev",{"^->":"04_further_assessment.risk.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Alex's thoughts are quite concerning, continue with the current line of discussion.",{"->":"$r","var":true},null]}],["ev",{"^->":"04_further_assessment.risk.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^The psychology department are best able to help with Alex's very complex situation.",{"->":"$r","var":true},null]}],["ev",{"^->":"04_further_assessment.risk.0.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Alex's alcohol intake is quite concerning, this will be acting as a depressant.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"04_further_assessment.risk.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],"\n","^Becoming increasingly concerned about Alex's mood you delve deeper.","\n","ev",{"VAR?":"score"},10,"+",{"temp=":"score","re":true},"/ev",{"->":"05_risk_assessment.mood"},{"#f":7}],"c-1":["ev",{"^->":"04_further_assessment.risk.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],"\n","^There are so many factors impacting on Alex's life just now. Psychologists would be best placed to help Alex with this in depth work.","\n","ev",{"VAR?":"score"},10,"-",{"temp=":"score","re":true},"/ev",{"->":"05_risk_assessment.therapy"},{"#f":7}],"c-2":["ev",{"^->":"04_further_assessment.risk.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],"\n","^No answers are found at the bottom of a bottle. You choose to explore Alex's relationship with alcohol.","\n",{"->":"05_risk_assessment.alcohol"},"end",{"#f":7}]}],{"#f":3}],"social":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^<i>\"No one comes to visit me any more. My mate that I've known for years recently moved away to be closer to his family down South.\"</i>","\n","^You have the impression of a man who never had many contacts to begin with, most of whom have fallen away over the years.","\n","^<i>\"At least I don't have to justify every trip to the pub now.\"</i>","\n","^There is a hint of anger as he says this.","\n","^<i>\"I used to drink quite heavily when I was working with the lads. She always made it quite clear that this was not on. At least it is getting me out the house and spending time with other people.\"</i>","\n",["ev",{"^->":"04_further_assessment.social.0.17.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Alex's alcohol intake is affecting everything else. Focus on that.",{"->":"$r","var":true},null]}],["ev",{"^->":"04_further_assessment.social.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Now is the time to explore Alex's mood in more depth.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"04_further_assessment.social.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.17.s"},[{"#n":"$r2"}],"\n","^You suspect Alex is underreporting his alcohol intake and spend time looking at this.","\n",{"->":"05_risk_assessment.alcohol"},{"#f":7}],"c-1":["ev",{"^->":"04_further_assessment.social.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],"\n","^All these factors combined make you more concerned about Alex's low mood.","\n","ev",{"VAR?":"score"},5,"+",{"temp=":"score","re":true},"/ev",{"->":".^.^.^.^.risk"},"end",{"#f":7}]}],{"#f":3}],"physical":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^Alex discusses his physical symptoms at more length. The more he discusses them the more he seems to find. Bowel problems, generalised pain, palpitations and a lethargy.","\n","^By the time the doctor has arrived Alex is focused entirely on his physical symptoms and repeatedly drags the discussion back to these.","\n","^Eventually a community support package is agreed and Alex returns to his home.","\n","^He is encouraged to discuss his physical issues further with his GP.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":".^.^.^.^.physical2"},"\n",{"#f":7}]}],{"#f":3}],"physical2":["^Some weeks later you meet with Alex's new CMHN.","\n","^You receive a weary look.","\n","^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","end",{"#f":3}],"#f":3}],"05_risk_assessment":[{"->":".^.mood"},{"mood":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^Despite his dislike of talking about his own emotions you encourage Alex to continue.","\n","^<i>\"I can't be bothered any more. I just have no energy to do anything except meet myâ€¦ friends at the pub. They just make me feel worse.\"</i>","\n","^You wait.","\n","^<i>\"What's the point? My wife has left, my kids don't want to speak to me. I don't see what I can do.\"</i>","\n","^He looks at you.","\n","^<i>\"Well apart from come here and speak to you. But you can't give me my life back can you?\"</i>","\n","^There's a hint of anger in his voice.","\n","^You respond calmly and continue.","\n","^Alex remains very bleak and negative about his future. You ask directly about thoughts of suicide, history and plans for the same.","\n","^<i>\"I've thought about it. I could just take a load of painkillers and go to sleep. But what if it didn't work and I ended up a cabbage?\"</i>","\n","^He looks back down at the floor.","\n","^<i>\"I would need to make sure.\"</i>","\n","ev","str","^While a risk Alex is probably better in the community. Get the duty Doctor and push for a community support package.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^You fear Alex may leave, invoke the nurses holding power and find a Doctor. ","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Alex is plainly at risk and needs intensive support as an inpatient, get the Doctor in for a joint assessment.","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Given Alex's dislike of being in a mental health ward you and the Doctor suggest intensive support in the community.","\n",{"->":"06_final_outcome.community"},{"#f":7}],"c-1":["\n","^You're not sure Alex will be here by the time you can get a Doctor. You invoke the nurses holding power while you find a Doctor.","\n","ev",{"VAR?":"score"},10,"-",{"temp=":"score","re":true},"/ev",{"->":"06_final_outcome.holding"},{"#f":7}],"c-2":["\n","^You get a colleague to send the duty Doctor in to carry out a joint assessment.","\n","ev",{"VAR?":"score"},10,"+",{"temp=":"score","re":true},"/ev",{"->":"06_final_outcome.support"},"end",{"#f":7}]}],{"#f":3}],"therapy":["^Alex is referred to psychology.","\n","^Alex is still on the waiting list for psychology some weeks later when he is admitted to hospital following an overdose.","\n","^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","end",{"#f":3}],"alcohol":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^You spend more time trying to get Alex to give a definitive answer about his alcohol intake.","\n","^After some time of working around Alex's evasiveness you suspect he is drinking at least three to four pints of beer on a daily basis. His vagueness on the topic of spirits does not fill you with confidence the he is ready to discuss his drinking yet.","\n","^Alex does at least seem to accept that whatever amount he is drinking is probably too much and becoming a problem.","\n",["ev",{"^->":"05_risk_assessment.alcohol.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Alex needs to take back control. Give some information on alcohol supports he may access.",{"->":"$r","var":true},null]}],["ev",{"^->":"05_risk_assessment.alcohol.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Continue to explore Alex's mood. The alcohol is probably having a depressant effect.",{"->":"$r","var":true},null]}],["ev",{"^->":"05_risk_assessment.alcohol.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Alex's problems are driven by his alcohol issues. Do something about this.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"05_risk_assessment.alcohol.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n","^The best path for Alex is to regain control of his life. You get some information about agencies that can support Alex.","\n","ev",{"VAR?":"score"},10,"-",{"temp=":"score","re":true},"/ev",{"->":"06_alcohol_outcome.infodump"},{"#f":7}],"c-1":["ev",{"^->":"05_risk_assessment.alcohol.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n","^You explore Alex's low mood further.","\n","ev",{"VAR?":"score"},5,"+",{"temp=":"score","re":true},"/ev",{"->":".^.^.^.^.via_alcohol"},{"#f":7}],"c-2":["ev",{"^->":"05_risk_assessment.alcohol.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n","^You start to look at ways of helping Alex with his alcohol intake.","\n","ev",{"VAR?":"score"},5,"+",{"temp=":"score","re":true},"/ev",{"->":"06_alcohol_outcome.alcohol"},"end",{"#f":7}]}],{"#f":3}],"via_alcohol":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^Despite his dislike of talking about his own emotions you continue to encourage Alex.","\n","^<i>\"I can't be bothered any more. I just have no energy to do anything except meet myâ€¦ friends at the pub. They just make me feel worse.\"</i>","\n","^You wait.","\n","^<i>\"What's the point? My wife has left, my kids don't want to speak to me. I don't see what I can do.\"</i>","\n","^He looks at you.","\n","^<i>\"Well apart from come here and speak to you. But you can't give me my life back can you?\"</i>","\n","^There's a hint of anger in his voice.","\n","^You respond calmly and continue.","\n","^Alex remains very bleak and negative about his future. You ask directly about thoughts of suicide, history and plans for the same.","\n","^<i>\"I've thought about it. I could just take a load of painkillers and go to sleep. But what if it didn't work and I ended up a cabbage?\"</i>","\n","^He looks back down at the floor.","\n","^<i>\"I would need to make sure.\"</i>","\n","ev","str","^While a risk Alex is probably better in the community. Get the duty Doctor and push for a community support package.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Alex is plainly distressed and needs support, get the Doctor in for a joint assessment.","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^You fear Alex may leave, invoke the nurses holding power and find a Doctor. ","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Given Alex's dislike of being in a mental health ward you and the Doctor suggest intensive support in the community.","\n",{"->":"06_final_outcome.community"},{"#f":7}],"c-1":["\n","^You get a colleague to send the duty Doctor in to carry out a joint assessment.","\n","ev",{"VAR?":"score"},5,"+",{"temp=":"score","re":true},"/ev",{"->":"06_final_outcome.support"},{"#f":7}],"c-2":["\n","^You're not sure Alex will be here by the time you can get a Doctor. You invoke the nurses holding power while you find a Doctor.","\n","ev",{"VAR?":"score"},50,"-",{"temp=":"score","re":true},"/ev",{"->":"06_final_outcome.holding"},"end",{"#f":7}]}],{"#f":3}],"#f":3}],"06_final_outcome":[{"->":".^.community"},{"community":["^Congratulations you have found a good ending.","\n","^Hopefully Alex will be fine and we have access to an emergency community support team. We felt Alex would probably be better having a brief inpatient stay. There is an excellent argument for avoiding inpatient admission unless absolutely needed though.","\n","^Well done.","\n","^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^Add 10 points if you are a community mental health nurse.","\n","end",{"#f":3}],"holding":[["^You share your concerns with one of your colleagues and ask that they get the doctor to come as soon as she can.","\n","^Alex stares at you clearly alarmed.","\n","^<i>\"I told you there was nothing wrong with me and you're having me sectioned! You're not sending me to the loony bin.\"</i>","\n","^The doctor arrives after a few minutes and starts asking questions after the briefest of introductions.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":".^.^.^.^.holding2"},"\n",{"#f":7}]}],{"#f":3}],"holding2":[["^Alex clams up and shares very little. Stating that he had been quite distressed when speaking to his GP and that he was now much calmer.","\n","^The minimal responses from Alex raise no specific concerns that must be acted upon.","\n","^After wrapping up the interview Alex ignores your suggestion that he contact his GP in event of any future problems.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":".^.^.^.^.holding3"},"\n",{"#f":7}]}],{"#f":3}],"holding3":["^Some weeks after your assessment you find that Alex has been admitted, via A&E, after an overdose of prescribed medication.","\n","^This is a bad ending. Alex has not expressed any intent to leave and has been compliant with the assessment so far. There is no justification for using the holding power at this time.","\n","^Well done you managed to snatch defeat from the jaws of victory.","\n","^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","end",{"#f":3}],"support":["^Well done you have reached a good ending.","\n","^Fifty should be the best score. It is possible to get here and score slightly less.","\n","^Based on discussion we thought Alex should probably be admitted for a brief stay given the level of risk he presented.","\n","^Getting here fairly quickly should have been a priority. Many of the other questions were good questions but may have been better kept for a followup interview.","\n","^Community staff have been keen to point out that a good community support package is also very good!","\n","^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","end",{"#f":3}],"#f":3}],"06_alcohol_outcome":[{"->":".^.alcohol"},{"alcohol":[["^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","^You spend time exploring Alex's history with alcohol. Alex feels that his life is spinning out of control. He agrees that the solution is to try and regain control of his own life.","\n","^Alex agrees to being referred to  some support agencies, including the alcohol team. You promise to have the paperwork completed by the end of the day and ask for it to be treated as a priority.","\n","^The doctor arrives to continue the assessment.","\n","^After some time chatting to Alex she agrees that some kind of intensive community support would be best.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":".^.^.^.^.alcohol2"},"\n",{"#f":7}]}],{"#f":3}],"alcohol2":["^Later you hear from the alcohol team that Alex is doing well. After a rocky start he has begun to make good progress towards getting his life back together.","\n","^This is a less than ideal ending. Alex may get the support he needs but the more immediate risks should have been looked at first.","\n","^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","end",{"#f":3}],"infodump":[["^You spend time exploring Alex's history with alcohol. Alex feels that his life is spinning out of control. He agrees that the solution is to try and regain control of his own life.","\n","^He promises faithfully to take the information with him and to start looking at solutions.","\n","^The doctor arrives to continue the assessment.","\n","^Alex relates all of his problems to his alcohol intake and tells the doctor that he knows what he has to do now.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":".^.^.^.^.infodump2"},"\n",{"#f":7}]}],{"#f":3}],"infodump2":["^Some weeks later Alex is admitted to hospital following a heavy drinking session which resulted in him taking an overdose of his painkillers. He had been found by his ex-wife.","\n","^Empowering people is the best way to help people. Though probably  at this stage given Alex's low mood and inability to motivate himself to carry out most of his activities of daily living.","\n","^Your score is ","ev",{"VAR?":"score"},"out","/ev","^.","\n","end",{"#f":3}],"#f":3}],"FAQ":["^<h2>Frequently Asked Questions</h2>","\n","^<b>What is this thing?</b>","\n","^<i>This game is a prototype developed for a course I am undertaking. It is a brief example of a teaching tool for student nurses. The intent is to give access to situations that may not come up that often in practice. A cross between a role play sessions and a multiple choice test.</i>","\n","^<b>All the bad endings are very bad! I'm sad.</b>","\n","^<i>I am too. I wanted Alex to have a wide variety of terrible things happen to him. I only had time to pick one.</i>","\n","^<b>Is this based on a specific person?</b>","\n","^<i>No.</i>","\n","^<b>Your dull and leaden prose has upset me.</b>","\n","^<i>That's not a question.</i>","\n","^<b>How did you make this?</b>","\n","^<i>Using Choicescript there's probably a link at the bottom of this page. It's quite easy to use and capable of much more than demonstrated here. The scenario development was done on a large sheet of paper with multi coloured pens. It is very, very pretty. Testing has been carried out by as many nurses and students I can put it in front of. This one is actually writen in Ink which is what I was meant to use at the start!</i>","\n","^<b>Are you doing more?</b>","\n","^<i>Hopefully. More importantly I hope to be given the chance to show other people how to make their own. Especially service users. Imagine one of these done entirely from the patient perspective.</i>","\n","^<b>I like pictures!</b>","\n","^<i>Also not a question. I also like pictures. Once the basic story is complete it is very easy to convert to different formats. This would be a bit more complicated to program.</i>","\n","^<b>Can I play this without an internet connection?</b>","\n","^<i>Yes, but not yet. It is easy to turn into an Android / Apple Phone application.</i>","\n","^<b>I don't understand some of your choices.</b>","\n","^<i>That's fair. Feedback has suggested that some more options should have been given. In the full game more information would be given at the end about the scoring.</i>","\n","^<b>Question</b>","\n","^<i>Answer</i>","\n","^<b>Question</b>","\n","^<i>Answer</i>","\n","^<b>Question</b>","\n","^<i>Answer</i>","\n","end",{"#f":3}],"global decl":["ev",0,{"VAR=":"score"},"/ev","end",null],"#f":3}],"listDefs":{}};