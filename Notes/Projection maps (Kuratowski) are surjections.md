<br />
<br />

Date Created: 30/01/2022 12:29:53
Tags: #Proposition #Closed 

Proved by: [[Formula in replacement image constructs a function]]
Justifications: _Not Applicable_

Generalizations: [[Projection maps (arbitrary) are surjections]]
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ and $Y$ be non-empty sets. Then the projection maps_
$$\begin{equation}
    \begin{aligned}
        \pi_X:X\times Y\to X\ \ \ \ &\textrm{\it{mapping}}\ \ \ \ \tpl{x,y}\mapsto x\\
        \pi_Y:X\times Y\to Y\ \ \ \ &\textrm{\it{mapping}}\ \ \ \ \tpl{x,y}\mapsto y
    \end{aligned}
\end{equation}$$
_are surjective._

```

_Proof_. Set $p\coloneqq\tpl{x,y}$. We first need to prove that $\pi_X$ and $\pi_Y$ are indeed functions; that is, we need formulae $\phi\l(p,x\r)$ and $\phi\l(p,y\r)$ such that $\fa p\in X\times Y,\ex!x:\phi\l(p,x\r)$ and $\fa p\in X\times Y,\ex!y:\phi\l(p,y\r)$. Indeed, we claim that
$$\begin{equation}
    \phi\l(p,x\r)\,\colon\!\Leftrightarrow x=\bigcup\bigcap p\ \ \ \ \textrm{and}\ \ \ \ \phi\l(p,y\r)\,\colon\!\Leftrightarrow y=\bigcup\l\{z\in\bigcup p\mid\bigcup p\neq\bigcap p\Rightarrow z\not\in\bigcap p\r\}.
\end{equation}$$
The result then follows from the uniqueness of the union and intersection of sets. From these constructions, we need to prove that $\ran\pi_X=X$ and $\ran\pi_Y=Y$.
* ($\ran\pi_X=X$): For the forward inclusion, compute
$$\begin{equation}
    \begin{alignedat}{2}
        \bigcup\bigcap p&=\bigcup\bigcap\tpl{x,y}&&\textrm{Substitution}\\
        &=\bigcup\bigcap\l\{\l\{x\r\},\l\{x,y\r\}\r\}\ \ \ \ \ \ \ \ &&\textrm{Definition of ordered pair}\\
        &=\bigcup\l\{x\r\}&&\textrm{Simplification}\\
        &=x.&&\textrm{Simplification}
    \end{alignedat}
\end{equation}$$
For the backward inclusion, take $x\in X$ and let $y'\in Y$ be arbitrary (whose existence is due to $Y\neq\em$). Observe then that $\pi_X\l(\tpl{x,y'}\r)=x$.
* ($\ran\pi_Y=Y$): For the forward inclusion, observe that
$$\begin{equation}
    \begin{gathered}
        \bigcup p&=\bigcup\tpl{x,y}=\bigcup\l\{\l\{x\r\},\l\{x,y\r\}\r\}=\l\{x,y\r\}\\
        \bigcap p&=\bigcap\tpl{x,y}=\bigcap\l\{\l\{x\r\},\l\{x,y\r\}\r\}=\l\{x\r\}
    \end{gathered}\tag{$\ast$}
\end{equation}$$
and compute
$$\begin{equation}
    \begin{alignedat}{2}
        \bigcup\l\{z=\bigcup p\mid\bigcup p\neq\bigcap p\Rightarrow z\not\in\bigcap p\r\}&=\bigcup\l\{z\in\l\{x,y\r\}\mid\l\{x,y\r\}\neq\l\{x\r\}\Rightarrow z\not\in\l\{z\r\}\r\}\ \ \ \ \ \ \ \ &&\textrm{Lemma }\l(\ast\r)\\
        &=\bigcup\l\{z\in\l\{x,y\r\}\mid z\not\in\l\{x\r\}\r\}&&\l\{x,y\r\}\neq\l\{x\r\}\\
        &=\bigcup\l\{z\in\l\{y\r\}\r\}&&\l\{y\r\}=\l\{x,y\r\}\setcomp\l\{x\r\}\\
        &=\bigcup\l\{y\r\}&&\textrm{Definition of singleton}\\
        &=y.&&\textrm{Simplification}
    \end{alignedat}
\end{equation}$$
For the backward inclusion, take $y\in Y$ and let $x'\in X$ be arbitrary (whose existence is due to $X\neq\em$). Observe then that $\pi_Y\l(\tpl{x',y}\r)=y$.<span style="float:right;">$\blacksquare$</span>
