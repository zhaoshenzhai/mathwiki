<br />
<br />

Date Created: 27/01/2022 11:38:08
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$ with $X\neq\em$. Then $f$ has a left inverse iff $f$ is injective._

```

_Proof_. ($\Rightarrow$): Let $g:Y\to X$ be a left inverse of $f$ and take any $x,x'\in X$ such that $f\l(x\r)=f\l(x'\r)$. Observe that
$$\begin{equation}
    \begin{alignedat}{2}
        x&=\id_X\l(x\r)&&\textrm{Definition of the identity function}\\
        &=\l(g\circ f\r)\l(x\r)&&g\textrm{ is a left inverse of }f\\
        &=g\l(f\l(x\r)\r)&&\textrm{Definition of composition of functions}\\
        &=g\l(f\l(x'\r)\r)&&\textrm{Hypothesis}\\
        &=\l(g\circ f\r)\l(x'\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of composition of functions}\\
        &=\id_X\l(x'\r)&&g\textrm{ is a left inverse of }f\\
        &=x',&&\textrm{Definition of the identity function}
    \end{alignedat}
\end{equation}$$
so $f$ is an injection.

($\Leftarrow$): Assume that $f$ is an injection. Since $X\neq\em$, we can fix some $s\in X$. Define the function
$$\begin{equation}
    g:Y\to X\ \ \ \ \textrm{mapping}\ \ \ \ y\mapsto
        \begin{dcases}
            x & \textrm{if }y\in\im f\\
            s & \textrm{else}
        \end{dcases}
\end{equation}$$
where $x$ is the unique element in $X$ such that $f\l(x\r)=y$; this is well-defined since $f$ is an injection. Now, for all $x\in X$, we have $g\l(f\l(x\r)\r)=x$ since $f\l(x\r)\in\im f$, so $g$ is a left inverse of $f$.<span style="float:right;">$\blacksquare$</span>
