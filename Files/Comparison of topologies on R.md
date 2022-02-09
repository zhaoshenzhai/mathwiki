<br />
<br />

Date Created: 08/02/2022 11:24:30
Tags: #Proposition #Closed 

Proved by: [[Upper-limit topology strictly finer than standard topology]], [[Lower-limit topology strictly finer than standard topology]], [[K topology strictly finer than standard topology]], [[Upper-limit topology strictly finer than K topology]], [[Lower and upper limit topologies are not comparable]], [[Lower and K topologies are not comparable]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

_Let $\mb{R}$ be the set of real numbers. Then the upper-limit topology_ $\mc{T}_\textrm{UL}$_, lower-limit topology_ $\mc{T}_\textrm{LL}$_, and the $K$ topology_ $\mc{T}_\textrm{K}$ _on $\mb{R}$ are all strictly finer than the standard topology_ $\mc{T}_\textrm{st}$ _on $\mb{R}$._

_Furthermore,_ $\mc{T}_\textrm{UL}$ _is strictly finer than_ $\mc{T}_\textrm{K}$_, and_ $\mc{T}_\textrm{LL}$ _is not comparable with either_ $\mc{T}_\textrm{UL}$ _or_ $\mc{T}_\textrm{K}$_._

--- admonition

_Proof_. See links above.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The relationship between these topologies can be illustrated with the following Hasse diagram:

<center><img src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bmatrix%7D%0A%5Cusetikzlibrary%7Bpositioning%7D%0A%5Cusetikzlibrary%7Bpatterns%7D%0A%5Cusetikzlibrary%7Bdecorations.markings%7D%0A%5Cusetikzlibrary%7Barrows%7D%0A%5Cusetikzlibrary%7Barrows.meta%7D%0A%5Cusetikzlibrary%7Bbackgrounds%7D%0A%5Cusetikzlibrary%7Bmath%7D%0A%5Cdefinecolor%7BtextColor%7D%7Brgb%7D%7B0.973%2C%200.973%2C%201%7D%0A%5Cdefinecolor%7BbgColor%7D%7BRGB%7D%7B29%2C%2032%2C%2038%7D%0A%5Cbegin%7Btikzpicture%7D%5Bcolor%3DtextColor%5D%0A%5Cdraw%20(0%2C3.8)%20circle%20(0)%3B%0A%5Cdraw%20(0%2C-0.8)%20circle%20(0)%3B%0A%5Cnode%20(discrete)%20at%20(0%2C3.5)%20%7B%5Cfootnotesize%7B%24%5Cmathcal%7BT%7D_%5Cmathrm%7Bdiscrete%7D%24%7D%7D%3B%0A%5Cnode%20(UL)%20at%20(-0.8%2C2)%20%7B%5Cfootnotesize%7B%24%5Cmathcal%7BT%7D_%5Cmathrm%7BUL%7D%24%7D%7D%3B%0A%5Cnode%20(LL)%20at%20(0.8%2C2)%20%7B%5Cfootnotesize%7B%24%5Cmathcal%7BT%7D_%5Cmathrm%7BLL%7D%24%7D%7D%3B%0A%5Cnode%20(K)%20at%20(0%2C1)%20%7B%5Cfootnotesize%7B%24%5Cmathcal%7BT%7D_%5Cmathrm%7BK%7D%24%7D%7D%3B%0A%5Cnode%20(st)%20at%20(0%2C-0.5)%20%7B%5Cfootnotesize%7B%24%5Cmathcal%7BT%7D_%5Cmathrm%7Bst%7D%24%7D%7D%3B%0A%5Cnode%20(tr)%20at%20(0%2C-2)%20%7B%5Cfootnotesize%7B%24%5Cmathcal%7BT%7D_%5Cmathrm%7Btrivial%7D%24%7D%7D%3B%0A%5Cdraw%20(st)%20--%20(K)%20--%20(UL)%20--%20(discrete)%20--%20(LL)%20--%20(st)%20(UL)%20--%20(st)%20--%20(tr)%3B%0A%5Cend%7Btikzpicture%7D%0A"/></center>

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/09-02-2022_2122/image.svg"></center>

A line segment that points upward indicate a subset relation. If any two topologies are not connected with line segments that only point upward, then they are not comparable.<span style="float:right;">$\blacklozenge$</span>
