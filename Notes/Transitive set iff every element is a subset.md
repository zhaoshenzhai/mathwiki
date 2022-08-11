---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/01/2022 19:20:35
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_A set $z$ is a transitive set iff $\fa y\in z:y\subseteq z$._

```

_Proof_. The result follows from the following chain of equivalences:

$\begin{alignat}{2}
    \fa y\in z:y\subseteq z&\Leftrightarrow\fa y:\l(y\in z\Rightarrow\fa x:x\in y\Rightarrow x\in z\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of subset}\\
    &\Leftrightarrow\fa y\fa x:\l[y\in z\Rightarrow\l(x\in y\Rightarrow x\in z\r)\r]&&x\textrm{ not free in }y\in z\\
    &\Leftrightarrow\fa y,\fa x:\l[\l(y\in z\land x\in y\r)\Rightarrow x\in z\r]&&\textrm{Exportation}\\
    &\Leftrightarrow\fa x,\fa y:\l[\l(x\in y\land y\in z\r)\Rightarrow x\in z\r].&&\textrm{Like quantifiers commute}\qedin
\end{alignat}$
