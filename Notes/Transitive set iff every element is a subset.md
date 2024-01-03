---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/01/2022 19:20:35
References: #Ref/NONE
Tags: #Type/Proposition #Topic/Set_Theory/Later/Ordinal

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

A set $z$ is a transitive set iff $\fa y\in z:y\subseteq z$.

```

<i>Proof.</i> The result follows from the following chain of equivalences:

$\begin{alignat}{2}
    \fa y\in z:y\subseteq z&\Leftrightarrow\fa y:\l(y\in z\Rightarrow\fa x:x\in y\Rightarrow x\in z\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of subset}\\
    &\Leftrightarrow\fa y\fa x:\l[y\in z\Rightarrow\l(x\in y\Rightarrow x\in z\r)\r]&&x\textrm{ not free in }y\in z\\
    &\Leftrightarrow\fa y,\fa x:\l[\l(y\in z\land x\in y\r)\Rightarrow x\in z\r]&&\textrm{Exportation}\\
    &\Leftrightarrow\fa x,\fa y:\l[\l(x\in y\land y\in z\r)\Rightarrow x\in z\r].&&\textrm{Like quantifiers commute}\qedin
\end{alignat}$
