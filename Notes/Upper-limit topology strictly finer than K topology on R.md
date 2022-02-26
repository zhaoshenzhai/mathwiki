<br />
<br />

Date Created: 05/02/2022 10:24:48
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed 

Proved by: [[Criteria for fineness w.r.t bases]], [[Upper-limit topology strictly finer than standard topology on R]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\R$ be the set of real numbers. Then the upper limit topology_ $\mc{T}_\textrm{UL}$ _is strictly finer than $K$ topology_ $\mc{T}_\textrm{K}$ _on $\R$._

```

_Proof_. It is easy to show that $\mc{T}_\textrm{UL}\not\subseteq\mc{T}_\textrm{K}$, simply fix $a<0$ and consider $\l(a,0\r]\in\mc{B}_\textrm{UL}$ with $x=0$. Any $B\in\mc{B}_\textrm{K}$ containing $x$ necessarily contains some positive $c\in\R$ with $c\neq1/n$ for all $n\in\N$, so $c\in B$ but $c\not\in\l(a,0\r]$ and thus $B\not\subseteq\l(a,0\r]$.

Thus it suffices to show that $\mc{T}_\textrm{K}\subseteq\mc{T}_\textrm{UL}$. To this end, take $B\in\mc{B}_\textrm{K}$ and $x\in B$.
* The case when $B=\l(a,b\r)\in\mc{B}_\textrm{st}$ for some $a,b\in\R$ is easy; recall that $\mc{T}_\textrm{st}\subseteq\mc{T}_\textrm{UL}$. It follows then that there exists some $B'\in\mc{B}_\textrm{UL}$ such that $x\in B'\subseteq B$.

Otherwise, let $B=\l(a,b\r)\comp K$; the same analysis above holds for when $a,b<0$ or $a,b>1$, for then $B$ reduces to $\l(a,b\r)$. Furthermore, if $x\leq0$ or $x>1$, the same analysis also holds for any $B$ containing $x$:
* In the former case, since $1/n>0$ for all $n\in\N$, we see that $\l(a,0\r)\subseteq B$; since $x\in\l(a,0\r)\in\mc{B}_\textrm{st}$ and $\mc{T}_\textrm{st}\subseteq\mc{T}_\textrm{UL}$, we see that there exists $B'\in\mc{B}_\textrm{UL}$ such that $x\in B'\subseteq\l(a,0\r)$ and hence $x\in B'\subseteq B$.

* In the latter case, since $1/n\leq1$ for all $n\in\N$, we see that $\l(1,b\r)\subseteq B$; since $x\in\l(1,b\r)\in\mc{B}_\textrm{st}$ and $\mc{T}_\textrm{st}\subseteq\mc{T}_\textrm{UL}$, we see that there exists $B'\in\mc{B}_\textrm{UL}$ such that $x\in B'\subseteq\l(1,b\r)$ and hence $x\in B'\subseteq B$.

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/09-02-2022_190923/image.svg", width=210></center>

Thus it suffices to consider any $B=\l(a,b\r)\comp K$ containing $x$ such that $x\in\l(0,1\r)$; if $x=1$, then $x\not\in\l(a,b\r)\comp K$ for any $a,b\in\R$. Since $1/n$ is not in $B$ for any $n\in\N$, it must be the case that there exists some $m\in\N$ such that
$$\begin{equation}
    x\in\l(\frac{1}{m+1},\frac{1}{m}\r)\eqqcolon J.
\end{equation}$$
Observe that
$$\begin{equation}
    x\in\underbrace{\l(a,b\r)\cap J}_{\large{\eqqcolon\,I\in\mc{B}_\textrm{st}}}\subseteq B,
\end{equation}$$
and since $\mc{T}_\textrm{st}\subseteq\mc{T}_\textrm{UL}$, we see that there exists $B'\in\mc{B}_\textrm{UL}$ such that $x\in B'\subseteq I$ and hence $x\in B'\subseteq B$.

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/09-02-2022_182331/image.svg", width=630></center>

(Justification for $I\subseteq B$): In the figure above, the off-axis intervals represent what $B=\l(a,b\r)\comp K$ can be relative to the interval $J$; vertical lines represent $\textrm{`}$holes$\textrm{'}$ in $B$. Observe that in each case, $I=\l(a,b\r)\cap J$ does not contain any points of the form $1/n$ for $n\in\N$, and thus $I\subseteq B$.<span style="float:right;">$\blacksquare$</span>
