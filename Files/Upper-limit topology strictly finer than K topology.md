<br />
<br />

Date Created: 05/02/2022 10:24:48
Tags: #Proposition #Closed 

Proved by: [[Criteria for fineness w.r.t bases]], [[Upper-limit topology strictly finer than standard topology]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

_Let $\mb{R}$ be the set of real numbers. Then the upper limit topology_ $\mc{T}_\textrm{UL}$ _is strictly finer than $K$ topology_ $\mc{T}_\textrm{K}$ _on $\mb{R}$._

--- admonition

_Proof_. It is easy to show that $\mc{T}_\textrm{UL}\not\subseteq\mc{T}_\textrm{K}$, simply fix $a<0$ and consider $\l(a,0\r]\in\mc{B}_\textrm{UL}$ with $x=0$. Any $B\in\mc{B}_\textrm{K}$ containing $x$ necessarily contains some positive $c\in\mb{R}$ with $c\neq1/n$ for all $n\in\mb{N}$, so $c\in B$ but $c\not\in\l(a,0\r]$ and thus $B\not\subseteq\l(a,0\r]$.

Thus it suffices to show that $\mc{T}_\textrm{K}\subseteq\mc{T}_\textrm{UL}$. To this end, take $B\in\mc{B}_\textrm{K}$ and $x\in B$.
* The case when $B=\l(a,b\r)\in\mc{B}_\textrm{st}$ for some $a,b\in\mb{R}$ is easy; recall that $\mc{T}_\textrm{st}\subseteq\mc{T}_\textrm{UL}$. It follows then that there exists some $B'\in\mc{B}_\textrm{UL}$ such that $x\in B'\subseteq B$.

Otherwise, let $B=\l(a,b\r)\comp K$; the same analysis above holds for when $a,b<0$ or $a,b>1$, for then $B$ reduces to $\l(a,b\r)$. Furthermore, if $x\leq0$ or $x>1$, the same analysis also holds for any $B$ containing $x$:
* In the former case, since $1/n>0$ for all $n\in\mb{N}$, we see that $\l(a,0\r)\subseteq B$; since $x\in\l(a,0\r)\in\mc{B}_\textrm{st}$ and $\mc{T}_\textrm{st}\subseteq\mc{T}_\textrm{UL}$, we see that there exists $B'\in\mc{B}_\textrm{UL}$ such that $x\in B'\subseteq\l(a,0\r)$ and hence $x\in B'\subseteq B$.

* In the latter case, since $1/n\leq1$ for all $n\in\mb{N}$, we see that $\l(1,b\r)\subseteq B$; since $x\in\l(1,b\r)\in\mc{B}_\textrm{st}$ and $\mc{T}_\textrm{st}\subseteq\mc{T}_\textrm{UL}$, we see that there exists $B'\in\mc{B}_\textrm{UL}$ such that $x\in B'\subseteq\l(1,b\r)$ and hence $x\in B'\subseteq B$.
<br /><center><img src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bmatrix%7D%0A%5Cusetikzlibrary%7Bpositioning%7D%0A%5Cusetikzlibrary%7Bpatterns%7D%0A%5Cusetikzlibrary%7Bdecorations.markings%7D%0A%5Cusetikzlibrary%7Barrows%7D%0A%5Cusetikzlibrary%7Barrows.meta%7D%0A%5Cusetikzlibrary%7Bbackgrounds%7D%0A%5Cusetikzlibrary%7Bmath%7D%0A%5Cdefinecolor%7BtextColor%7D%7Brgb%7D%7B0.973%2C%200.973%2C%201%7D%0A%5Cdefinecolor%7BbgColor%7D%7Brgb%7D%7B0.3%2C%200.3%2C%200.3%7D%0A%5Cbegin%7Btikzpicture%7D%5Bcolor%3DtextColor%5D%0A%5Cdraw%5B%3C-%3E%5D%20(-1.4%2C0)%20--%20(2.4%2C0)%3B%0A%5Cdraw%5B(-)%5D%20(-1%2C0.5)%20--%20(-0%2C0.5)%3B%0A%5Cfill%20(-0.2%2C0)%20circle%20(0.05)%3B%0A%5Cdraw%20(-0.2%2C0.2)%20circle%20(0)%20node%7B%5Cfootnotesize%7B%24x%24%7D%7D%3B%0A%5Cdraw%5B(-)%5D%20(1%2C0.5)%20--%20(2%2C0.5)%3B%0A%5Cfill%20(1.2%2C0)%20circle%20(0.05)%3B%0A%5Cdraw%20(1.26%2C0.24)%20circle%20(0)%20node%7B%5Cfootnotesize%7B%24x'%24%7D%7D%3B%0A%5Cdraw%5B(-)%2C%20thick%5D%20(-1%2C0)%20--%20(2%2C0)%3B%0A%5Cdraw%20(-1%2C-0.26)%20circle%20(0)%20node%7B%5Cfootnotesize%7B%24a%24%7D%7D%3B%0A%5Cdraw%20(2%2C-0.26)%20circle%20(0)%20node%7B%5Cfootnotesize%7B%24b%24%7D%7D%3B%0A%5Cdraw%20(0%2C0.1)%20--%20(0%2C-0.1)%20node%5Banchor%3Dnorth%5D%7B%5Cfootnotesize%7B%240%24%7D%7D%3B%0A%5Cdraw%20(1%2C0.1)%20--%20(1%2C-0.1)%20node%5Banchor%3Dnorth%5D%7B%5Cfootnotesize%7B%241%24%7D%7D%3B%0A%5Cforeach%20%5Ci%20in%20%7B1%2C...%2C100%7D%0A%7B%0A%5Ctikzmath%0A%7B%0A%5Cx%20%3D%201%20%2F%20%5Ci%3B%0A%7D%0A%5Cdraw%20(%5Cx%2C0.1)%20--%20(%5Cx%2C%20-0.1)%3B%0A%7D%0A%5Cend%7Btikzpicture%7D%0A"/></center>

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/09-02-2022_1909/image.svg"></center>

Thus it suffices to consider any $B=\l(a,b\r)\comp K$ containing $x$ such that $x\in\l(0,1\r)$; if $x=1$, then $x\not\in\l(a,b\r)\comp K$ for any $a,b\in\mb{R}$. Since $1/n$ is not in $B$ for any $n\in\mb{N}$, it must be the case that there exists some $m\in\mb{N}$ such that
$$\begin{equation}
    x\in\l(\frac{1}{m+1},\frac{1}{m}\r)\eqqcolon J.
\end{equation}$$
Observe that
$$\begin{equation}
    x\in\underbrace{\l(a,b\r)\cap J}_{\large{\eqqcolon\,I\in\mc{B}_\textrm{st}}}\subseteq B,
\end{equation}$$
and since $\mc{T}_\textrm{st}\subseteq\mc{T}_\textrm{UL}$, we see that there exists $B'\in\mc{B}_\textrm{UL}$ such that $x\in B'\subseteq I$ and hence $x\in B'\subseteq B$.

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/09-02-2022_1823/image.svg", width=60%></center>

(Justification for $I\subseteq B$): In the figure above, the off-axis intervals represent what $B=\l(a,b\r)\comp K$ can be relative to the interval $J$; vertical lines represent $\textrm{`}$holes$\textrm{'}$ in $B$. Observe that in each case, $I=\l(a,b\r)\cap J$ does not contain any points of the form $1/n$ for $n\in\mb{N}$, and thus $I\subseteq B$.<span style="float:right;">$\blacksquare$</span>
