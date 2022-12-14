---
mathLink: Basic properties of $\bigcup$, $\bigcap$, and $\pow$
---

<div class="topSpace"></div>

Date Created: 03/06/2022 14:10:14
Tags: #Proposition #Later/Set_Theory

Proved by: [[Subset relation is transitive]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $A$ and $B$ be sets. Then the following algebraic identities hold:_
* _Regarding unions:_
    1. _(Unions of unions): $\bigcup\l(A\cup B\r)=\bigcup A\cup\bigcup B$._
    2. _(Union is monotone w.r.t. subsets): If $A\subseteq B$, then $\bigcup A\subseteq\bigcup B$._
    3. _(Union of subsets is subset of union): If $A\subseteq B$ and $C\subseteq D$ for any sets $C$ and $D$, then  $A\cup C\subseteq B\cup D$._
    4. _(Union of set of subsets is a subset): If every $a\in A$ is a subset of some set $a'$, then $\bigcup A\subseteq a'$._
    5. _(Element of a set is a subset of its union): For all $a\in A$, we have $a\subseteq\bigcup A$._
* _Regarding intersections:_
    1. _(Intersections of intersections): If $A,B\neq\em$, then $\bigcap A\cap\bigcap B=\bigcap\l\{a\cap b\mid a\in A\land b\in B\r\}$._
    2. _(Intersection is anti-monotone w.r.t subsets): If $A\neq\em$ and $A\subseteq B$, then $\bigcap B\subseteq\bigcap A$._
    3. _(Intersection of subsets is subset of intersection): If $A\subseteq B$ and $C\subseteq D$ for any sets $C$ and $D$, then $A\cap C\subseteq B\cap D$._
    4. _(Intersection of set of supersets is a superset): If every $a\in A$ is a superset of some set $a'$, then $a'\subseteq\bigcap A$._
    5. _(Element of a set is a superset of its intersection): If $A\neq\em$, then, for all $a\in A$, we have $\bigcap A\subseteq a$._
* _Regarding power sets:_
    1. _(Power set is monotone w.r.t. subsets): If $A\subseteq B$, then $\pow A\subseteq\pow B$._
* _Regarding their interplay:_
    1. _(Union distributes over binary intersection): $\l(\bigcup A\r)\cap\l(\bigcup B\r)=\bigcup\l\{a\cap b\mid a\in A\land b\in B\r\}$._
    2. _(Intersection of intersection is intersection of union): If $A,B\neq\em$, then $\bigcap A\cap\bigcap B=\bigcap\l(A\cup B\r)$._

```

_Proof_. Regarding unions:
1. Take $x\in\bigcup\l(A\cup B\r)$. The result follows from the following chain of equivalences:
$$\begin{equation}
    \begin{aligned}
        x\in\bigcup\l(A\cup B\r)&\Leftrightarrow\ex y\l(y\in A\cup B\land x\in y\r) && \textrm{Definition of union} \\
        &\Leftrightarrow\ex y\l[\l(y\in A\lor y\in B\r)\land x\in u\r] && \textrm{Definition of union} \\
        &\Leftrightarrow\ex y\l[\l(y\in A\land x\in u\r)\lor\l(y\in B\land x\in u\r)\r] && \textrm{Distribution of }\land\textrm{ over }\lor \\
        &\Leftrightarrow\ex y\l(y\in A\land x\in u\r)\lor\ex y\l(y\in B\land x\in u\r) && \textrm{Distribution of }\ex\textrm{ over }\lor \\
        &\Leftrightarrow x\in\bigcup A\lor x\in\bigcup B && \textrm{Definition of union} \\
        &\Leftrightarrow x\in\bigcup A\cup\bigcup B. && \textrm{Definition of union}
    \end{aligned}
\end{equation}$$
2. Take $x\in\bigcup A$. The result follows from the following chain of implications:
$$\begin{equation}
    \begin{aligned}
        x\in\bigcup A&\Leftrightarrow\ex a\l(x\in a\land a\in A\r) && \textrm{Definition of union} \\
        &\Rightarrow\ex a\l(x\in a\land a\in B\r) && A\subseteq B \\
        &\Leftrightarrow x\in\bigcup B. && \textrm{Definition of union}
    \end{aligned}
\end{equation}$$
3. Take $x\in A\cup C$. The result follows from the following chain of implications:
$$\begin{equation}
    \begin{aligned}
        x\in A\cup C&\Leftrightarrow\ex y\l(x\in y\land y\in\l\{A,C\r\}\r) && \textrm{Definition of union} \\
        &\Leftrightarrow\ex y\l[x\in y\land\l(y\in A\lor y\in C\r)\r] && \textrm{Definition of pair set} \\
        &\Rightarrow\ex y\l[x\in y\land\l(y\in B\lor y\in D\r)\r] && A\subseteq B\land C\subseteq D \\
        &\Leftrightarrow\ex y\l(x\in y\land y\in\l\{B,D\r\}\r) && \textrm{Definition of pair set} \\
        &\Leftrightarrow x\in B\cup D. && \textrm{Definition of union}
    \end{aligned}
\end{equation}$$
4. Take $x\in\bigcup A$, so there exists some $a\in A$ such that $x\in a$. Since $a\subseteq b$, we see that $x\in b$ too.
5. If $A=\em$, then the result is vacuously true. Assume otherwise and take $a\in A$. If $a=\em$, it is also vacuously true that $\em\subseteq\bigcup A$. Thus take $c\in a$. Certainly there exists some $u\in A$ such that $c\in u$, namely $u=a$. By the definition of union, we have $c\in\bigcup A$. Since $c$ is arbitrary, the result follows.<span style="float:right;">$\blacksquare$</span>

---

_Proof_. Regarding intersections:
1. Take $x\in\bigcap A\cap\bigcap B$. The result follows from the following chain of equivalences:
$$\begin{equation}
	\begin{aligned}
		x\in\bigcap A\cap\bigcap B&\Leftrightarrow x\in\bigcap A\land x\in\bigcap B && \textrm{Definition of intersection} \\
        &\Leftrightarrow\fa a\l(a\in A\Rightarrow x\in a\r)\land\fa b\l(b\in B\Rightarrow x\in b\r) && \textrm{Definition of intersection} \\
        &\Leftrightarrow\fa a\fa b\l[\l(a\in A\Rightarrow x\in a\r)\land\l(b\in B\Rightarrow x\in b\r)\r] && a\textrm{ is not free in }b\in B\Rightarrow x\in b\textrm{; similarly for }b \\
        &\Leftrightarrow\fa a\fa b\l[\l(a\in A\land b\in B\r)\Rightarrow\l(x\in a\land x\in b\r)\r] && \textrm{Independence of }\Rightarrow \\
        &\Leftrightarrow\fa a\fa b\l[\l(a\in A\land b\in B\r)\Rightarrow x\in a\cap b\r] && \textrm{Definition of intersection} \\
        &\Leftrightarrow\fa y\l(y\in\l\{a\cap b\mid a\in A\land b\in B\r\}\Rightarrow x\in y\r) && \textrm{Substitution} \\
        &\Leftrightarrow x\in\bigcap\l\{a\cap b\mid a\in A\land b\in B\r\}. && \textrm{Definition of intersection}
	\end{aligned}
\end{equation}$$
2. Since $A\subseteq B$ and $A\neq\em$, we see that $B\neq\em$. Take $x\in\bigcap B$, so $x\in b$ for all $b\in B$. Evidently, we have $x\in b$ for all those $b\in A$ too, so $x\in\bigcap A$.
3. Take $x\in A\cap B$. The result follows from the following chain of implications:
$$\begin{equation}
	\begin{aligned}
        x\in A\cap C&\Leftrightarrow\fa y\l(y\in\l\{A,C\r\}\Rightarrow x\in y\r) && \textrm{Definition of intersection} \\
        &\Leftrightarrow\fa y\l[\l(y\in A\lor y\in C\r)\Rightarrow x\in y\r] && \textrm{Definition of pair set} \\
        &\Rightarrow\fa y\l[\l(y\in B\lor y\in D\r)\Rightarrow x\in y\r] && A\subseteq B\land C\subseteq D \\
        &\Leftrightarrow\fa y\l(y\in\l\{B,D\r\}\Rightarrow x\in y\r) && \textrm{Definition of pair set} \\
        &\Leftrightarrow x\in B\cap D. && \textrm{Definition of intersection}
	\end{aligned}
\end{equation}$$
3. Take $x\in a'$, so $x\in a$ for all $a\in A$. It follows then that $x\in\bigcap A$.
4. Take $x\in\bigcap A$, so $x\in a$ for all $a\in A$. It follows then that $\bigcap A\subseteq a$ for all $a\in A$.<span style="float:right;">$\blacksquare$</span>

---

_Proof_. Regarding power sets:
1. Take $x\in\pow A$, so $x\subseteq A$. Since $A\subseteq B$, we see that $x\subseteq B$ and thus $x\in\pow B$. The result follows since $x$ is arbitrary.<span style="float:right;">$\blacksquare$</span>

---

_Proof_. Regarding their interplay:
1. Take $x\in\l(\bigcup A\r)\cap\l(\bigcup B\r)$. The result follows from the following chain of equivalences:
$$\begin{equation}
	\begin{aligned}
        x\in\l(\bigcup A\r)\cap\l(\bigcup B\r)&\Leftrightarrow x\in\bigcup A\land x\in\bigcup B && \textrm{Definition of intersection} \\
        &\Leftrightarrow\l[\l(\ex a\in A\r)x\in a\r]\land\l[\l(\ex b\in B\r)x\in b\r] && \textrm{Definition of union} \\
        &\Leftrightarrow\l(\ex a\in A\r)\l[x\in a\land\l[\l(\ex b\in B\r)x\in b\r]\r] && a\textrm{ is not free in }\l[\l(\ex b\in B\r)x\in b\r] \\
        &\Leftrightarrow\l(\ex a\in A\r)\l(\ex b\in B\r)\l(x\in a\land x\in b\r) && b\textrm{ is not free in }x\in a \\
        &\Leftrightarrow\l(\ex a\in A\r)\l(\ex b\in B\r)x\in a\cap b && \textrm{Definition of intersection} \\
        &\Leftrightarrow\l(\ex y\in\l\{a\cap b\mid a\in A\land b\in B\r\}\r)x\in y && \textrm{Substitution} \\
        &\Leftrightarrow x\in\bigcup\l\{a\in b\mid a\in A\land b\in B\r\}. && \textrm{Definition of union}
	\end{aligned}
\end{equation}$$
2. Take $x\in\bigcap A\cap\bigcap B$, so $x\in\bigcap A$ and $x\in\bigcap B$. Note that $x\in y$ for any $y\in A\cup B$, so $x\in\bigcap\l(A\cup B\r)$. Conversely, take $x\in\bigcap\l(A\cup B\r)$, so $x\in y$ for all $y\in A\cup B$. In particular, $x\in y$ for all $y\in A$, so $x\in\bigcap A$. Similarly, $x\in\bigcap B$, so $x\in\bigcap A\cap\bigcap B$.<span style="float:right;">$\blacksquare$</span>
