---
lang: en
subtitle: A list of open source board games engines and implementations.
  Focused on classic games. For personal use.
title: Awesome Classic Board Games List
---

# Contents [[toc]{.smallcaps}]{.tag tag-name="toc"} {#contents}

-   [Introduction](#introduction)
-   [Game Engines](#game-engines)
    -   [Chess Type Game Engines](#chess-type-game-engines)
-   [Multi-game Frontends](#multi-game-frontends)
    -   [liground](#liground)
    -   [Portable Puzzle Collection](#portable-puzzle-collection)
    -   [Ludii Portal](#ludii-portal)
-   [Backgammon](#backgammon)
    -   [GNU Backgammon](#gnu-backgammon)
-   [Chess](#chess)
    -   [Online](#online)
    -   [Frontend](#frontend)
-   [Makruk](#makruk)
-   [Shogi](#shogi)
    -   [Online](#online-1)
    -   [Frontends](#frontends)
-   [Xiangqi](#xiangqi)
    -   [Online](#online-2)

# Introduction

This is not intended to be complete. Just a collection of starting
points for further exploration.

I\'m not putting it here but you should look at PySolFC for card games.

# Game Engines

## Chess Type Game Engines

### Fairy Stockfish [[linux]{.smallcaps}]{.tag tag-name="linux"} [[windows]{.smallcaps}]{.tag tag-name="windows"} [[chess]{.smallcaps}]{.tag tag-name="chess"} [[shogi]{.smallcaps}]{.tag tag-name="shogi"} [[xiangqi]{.smallcaps}]{.tag tag-name="xiangqi"} [[makruk]{.smallcaps}]{.tag tag-name="makruk"} {#fairy-stockfish}

[GitHub -
fairy-stockfish/Fairy-Stockfish](https://github.com/fairy-stockfish/Fairy-Stockfish)

Fairy-Stockfish is a chess variant engine derived from Stockfish
designed for the support of fairy chess variants and easy extensibility
with more games. It can play various regional, historical, and modern
chess variants as well as games with user-defined rules. For
compatibility with graphical user interfaces it supports the UCI, UCCI,
USI, UCI-cyclone, and CECP/XBoard protocols.

### Sjaak :chess:shatranji:windows/linux [[macos]{.smallcaps}]{.tag tag-name="macos"} [[makruk]{.smallcaps}]{.tag tag-name="makruk"} [[xiangqi]{.smallcaps}]{.tag tag-name="xiangqi"} {#sjaak-chessshatranjiwindowslinux}

[Chess (Jazz & Sjaak)
home](http://www.eglebbk.dds.nl/program/chess-index.html)

Welcome to the homepage dedicated to my expanding family of chess
engines: Jazz, Sjaak and Leonidas!

Jazz is a fairly standard chess program. It currently has no opening
book, and doesn\'t use an endgame database.

Sjaak is a much weaker chess program (Sjaak II less so than the old
version), but in addition to normal chess it can play a (large) number
of other games and chess variants.

Leonidas is intermediate between Jazz and Sjaak and was designed
primarily to play Spartan Chess (see below), but it plays some more
variants.

# Multi-game Frontends

## liground [[chess]{.smallcaps}]{.tag tag-name="chess"} [[xiangqi]{.smallcaps}]{.tag tag-name="xiangqi"} [[makruk]{.smallcaps}]{.tag tag-name="makruk"} [[shogi]{.smallcaps}]{.tag tag-name="shogi"} {#liground}

[GitHub - ml-research/liground: A free, open-source and modern Chess
Variant Analysis GUI for the 21st
century](https://github.com/ml-research/liground)

LiGround is a modern cross-platform chess variant GUI. It supports all
lichess variants, as well as all major regional variants (Xiangqi,
Shogi, Janggi, Makruk). Since the project still is rather new, it is not
as feature rich as the other GUIs yet. Precompiled versions for each OS
can be downloaded from the releases.

Its game logic uses the Fairy-Stockfish based ffishjs library, therefore
it is very well compatible with Fairy-Stockfish.

LiGround ships with preincluded engine binaries. By default all engines
are downloaded automatically into the ./engines/ folder as postinstall
action.

## Portable Puzzle Collection [[windows]{.smallcaps}]{.tag tag-name="windows"} [[linux]{.smallcaps}]{.tag tag-name="linux"} [[android]{.smallcaps}]{.tag tag-name="android"} {#portable-puzzle-collection}

Not strictly board games but a lot of them occupy the same cognitive
space for me.

[Simon Tatham\'s Portable Puzzle
Collection](https://www.chiark.greenend.org.uk/~sgtatham/puzzles/)

[Portable Puzzle Collection - Free download and play on Windows \|
Microsoft
Store](https://apps.microsoft.com/detail/9nblggh16n44?ocid=webpdpshare)

[Simon Tatham\'s Puzzles \| F-Droid - Free and Open Source Android App
Repository](https://f-droid.org/packages/name.boyle.chris.sgtpuzzles/)

## Ludii Portal [[multi]{.smallcaps}]{.tag tag-name="multi"} [[online]{.smallcaps}]{.tag tag-name="online"} {#ludii-portal}

[Ludii Portal](https://ludii.games/library.php)

Welcome to the Ludii Portal!

Ludii is a general game system designed to play, evaluate and design a
wide range of games, including board games, card games, dice games,
mathematical games, and so on. Download the Ludii player to explore our
ever-growing database of games, test your AI search algorithms, and
design your own games.

Games are described as structured sets of ludemes (units of game-related
information). This allows the full range of traditional strategy games
from around the world to be modelled in a single playable database for
the first time. Ludii is being developed as part of the ERC-funded
Digital Ludeme Project.

# Backgammon

## GNU Backgammon [[windows]{.smallcaps}]{.tag tag-name="windows"} [[linux]{.smallcaps}]{.tag tag-name="linux"} {#gnu-backgammon}

[GNU Backgammon](https://www.gnu.org/software/gnubg/#downloading)

GNU Backgammon (GNUbg) plays and analyzes backgammon games and matches.
It is able to play and analyze both money games and tournament matches,
evaluate and roll out positions, and more. Driven by a command-line
interface, it displays an ASCII rendering of a board on text-only
terminals, but also allows the user to play games and manipulate
positions with a graphical GTK+ interface. GNU Backgammon is extensible
on platforms which support Python.

# Chess

## Online

### Lichess [[online]{.smallcaps}]{.tag tag-name="online"} [[chess]{.smallcaps}]{.tag tag-name="chess"} {#lichess}

[Fairy-Stockfish : Activity •
lichess.org](https://lichess.org/@/Fairy-Stockfish)

### Pychess [[online]{.smallcaps}]{.tag tag-name="online"} [[chess]{.smallcaps}]{.tag tag-name="chess"} [[makruk]{.smallcaps}]{.tag tag-name="makruk"} [[shogi]{.smallcaps}]{.tag tag-name="shogi"} [[xiangqi]{.smallcaps}]{.tag tag-name="xiangqi"} {#pychess}

[PyChess • Free Online Chess Variants](https://www.pychess.org/)

## Frontend

### Cutechess [[chess]{.smallcaps}]{.tag tag-name="chess"} [[frontend]{.smallcaps}]{.tag tag-name="frontend"} [[windows]{.smallcaps}]{.tag tag-name="windows"} [[linux]{.smallcaps}]{.tag tag-name="linux"} {#cutechess}

[GitHub - cutechess/cutechess: Cute Chess is a graphical user interface,
command-line interface and a library for playing
chess.](https://github.com/cutechess/cutechess)

### Pychess [[chess]{.smallcaps}]{.tag tag-name="chess"} [[linux]{.smallcaps}]{.tag tag-name="linux"} [[windows]{.smallcaps}]{.tag tag-name="windows"} [[frontend]{.smallcaps}]{.tag tag-name="frontend"} {#pychess-1}

[PyChess - download](https://pychess.github.io/download/)

Welcome to PyChess, a free and feature-rich chess client designed for
Linux and Windows platforms. Whether you\'re a beginner looking for a
quick game or an advanced player seeking to enhance your skills, PyChess
has you covered.

### Xboard / Winboard [[linux]{.smallcaps}]{.tag tag-name="linux"} [[windows]{.smallcaps}]{.tag tag-name="windows"} [[frontend]{.smallcaps}]{.tag tag-name="frontend"} [[chess]{.smallcaps}]{.tag tag-name="chess"} [[xiangqi]{.smallcaps}]{.tag tag-name="xiangqi"} [[shogi]{.smallcaps}]{.tag tag-name="shogi"} {#xboard-winboard}

Xboard is almost certainly in your package repositories.

[WinBoard 4.7](http://hgm.nubati.net/)

A Graphical User Interface for Chess and its Variants

I have upgraded the popular Winboard GUI to be able to handle more
different piece types, and larger board sizes. I also improved the
support for variants with piece drops, such as Crazyhouse and Bughouse.

In addition, I included various adjudication possibilities for
engine-engine games. WinBoard can now adjudicate theoretical draws,
award 50-move and repetition draws (after an adjustable number of moves
or repetitions), adjudicate trivial draws such as KBKB. It can also test
draw and win claims by the engines for validity. The move legality
testing is improved to the point where it should be 100% reliable, as
WinBoard now also keeps track of castling rights and en-passant status.

WinBoard is now also aware of pieces occurring in Capablanca Chess
(ArchBishop and Chancellor), Shatranj (Alfil and Ferz), Xiangqi (Chinese
Chess) and Shogi (Japanese Chess), so that these games can also be
played with legality testing on. (Although the legality testing in the
latter two might be not as strict as with Western Chess.)

# Mahjong

## Online

### Mah - A Mahjong Solitaire Game

[GitHub - ffalt/mah: a html5 mahjong solitaire
game](https://github.com/ffalt/mah)

84 built-in boards

Random board generator for countless and more challenging games

13 tile/piece image sets; light and dark

8 image backgrounds, 375 pattern backgrounds, light and dark mode, 14
color themes

3 difficulty levels and 2 game setup generators

Automatic saving and restoring of game state and best times. In your
browser only - nothing is stored in the cloud!

# Makruk

Thai chess.

[Makruk - Wikipedia](https://en.wikipedia.org/wiki/Makruk)

Fairy stockfish can be used as an engine.

# Shogi [[shogi]{.smallcaps}]{.tag tag-name="shogi"} {#shogi}

## Online

### Lishogi [[online]{.smallcaps}]{.tag tag-name="online"} [[shogi]{.smallcaps}]{.tag tag-name="shogi"} {#lishogi}

[Fairy-Stockfish : Activity \|
lishogi.org](https://lishogi.org/@/Fairy-Stockfish)

## Frontends

### ShogiHome [[windows]{.smallcaps}]{.tag tag-name="windows"} [[macos]{.smallcaps}]{.tag tag-name="macos"} [[linux]{.smallcaps}]{.tag tag-name="linux"} [[frontend]{.smallcaps}]{.tag tag-name="frontend"} {#shogihome}

[ShogiHome](https://sunfish-shogi.github.io/shogihome/index.en.html)

ShogiHome is a desktop shogi app running on Windows, macOS, and Linux.
Anyone can get the source code create their version and distribute it.

# Xiangqi [[xiangqi]{.smallcaps}]{.tag tag-name="xiangqi"} {#xiangqi}

## Online

### Xiangqi.com

[Free Online Chinese Chess \| Play Xiangqi](https://www.xiangqi.com/)

Xiangqi (pronounced "shiang-chee") has been played for hundreds of years
and is today still one of the most popular board games in the world,
played in China and across Asia, and recently, in the West as well. You
can usually find men playing xiangqi in Chinatown neighborhoods across
the world.

### Classic Xiangqi Online

[Classic Xiangqi](https://www.classicxiangqi.com/)

Experience the ancient art of Chinese Chess in a modern setting.
Challenge players worldwide and improve your strategic skills!
