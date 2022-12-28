<div class="topSpace"></div>

Date Created: 26/09/2022 22:48:01
Tags: #Proposition #Group_Theory #Courses/MATH235

Proved by: [[Basic properties of groups]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Subgroup Test).

_Let $\tpl{G,\ast,e,i}$ be a group and fix a subset $H\subseteq G$. Let_ $\ast'\coloneqq\l.\ast\r|_{H\times H}$ and $i'\coloneqq\l.i\r|_{H}$, and fix $e'\in H$_. Then $\tpl{H,\ast',e',i'}$ is a subgroup of $\tpl{G,\ast,e,i}$ iff_
* $e\in H$.
* $\fa h_1,h_2\in H:h_1\ast'h_2\in H$.
* $\fa h\in H:i'\l(h\r)\in H$.

```

_Proof_. 
* ($\Rightarrow$): Since $H$ is a subgroup of $G$, there exists an identity $e'\in H$; it suffices to show that $e=e'$. Take any $h\in H$ and consider the equation $hx=h$ for $x\in G$. Observe that both $x=e$ and $x=e'$ are solutions thereof, and since $hx=h$ has a unique solution, this shows $e=e'$. Now, the fact that $\ast'$ and $i$ closes in $H$ follows readily from the fact that $\tpl{H,\ast',e',i'}$ is a group.

* ($\Leftarrow$): Observe that $H$ is a subset of $G$ whose operations $\ast':H\times H\to H$ and $i':H\to H$ close in $H$. Since $G$ is a group, we see that
$$\begin{equation}
    \fa g\in G:e\ast g=g=g\ast e\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \fa g\in G:g\ast i\l(g\r)=e=i\l(g\r)\ast g.
\end{equation}$$
Since $e\in H$, and because identities are unique, we see that $e=e'$ and hence
$$\begin{equation}
    \fa h\in G:e\ast h=h=h\ast h\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \fa h\in G:h\ast i\l(h\r)=e=i\l(h\r)\ast g.
\end{equation}$$
Associativity holds in $H$ trivially.<span style="float:right;">$\blacksquare$</span>
