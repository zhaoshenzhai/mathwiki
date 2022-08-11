<div class="topSpace"></div>

Date Created: 28/01/2022 17:27:04
Tags: #Proposition

Proved by: [[Collection of all singletons is a proper class]], [$\axispec$](Axiom%20Schema%20of%20Specification.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_The collection of all functions form a proper class. Formally, $\fa v,\ex f:f\textrm{\it{ is a function}}\land f\not\in v$._

```

_Proof_. Suppose, for sake of contradiction, that such a set $v$ exists, i.e. $\ex v,\fa f:\l(f\textrm{ is a function }\Rightarrow f\in v\r)$. By $\axispec$, we have
$$\begin{equation}
    \fa z\fa f\l[f\in z\Leftrightarrow f\in v\land\ex x:f=\l\{\tpl{x,x}\r\}\r].
\end{equation}$$
In other words, the set $z$ contains all functions of the form
$$\begin{equation}
    f=\l\{\tpl{x,x}\r\}=\l\{\l\{\l\{x\r\},\l\{x,x\r\}\r\}\r\}=\l\{\l\{\l\{x\r\}\r\}\r\}.
\end{equation}$$
Observe that $\bigcup\bigcup z=\l\{\l\{x\r\}\r\}$; since $x$ is arbitrary, this set is the $\textrm{`}$set of all singletons$\textrm{'}$ which contradicts the fact that there is none.<span style="float:right;">$\blacksquare$</span>
