var storyContent = ﻿{"inkVersion":20,"root":[[{"#":"author: Douglas McIntosh"},{"#":"title : Wooing Scott - A Guide"},{"->":"Start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Start":[["^This is where the game will start.","\n","^Please insert basic introductory stuff about how the game works. Start with a simple test of Rangers or Celtic. Make the wrong choice funny and return to the start. Remove the wrong option on the return.","\n","^We'll start with a simple choice.","\n","^What team do we want to select?","\n","ev","str","^Green","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Blue","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^I'm not sure this is the correct choice. ",{"->":"Start"},"\n",{"#f":5}],"c-1":["\n",[["^Are you certain?","\n","ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Ok then ",{"->":"Introduction"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Start"},"\n",{"#f":5}],"#f":5,"#n":"g-0"}],null],{"#f":5}]}],{"#f":1}],"Introduction":["^You have reached the introduction","\n","^Welcome to \"wooing Scott\".","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};