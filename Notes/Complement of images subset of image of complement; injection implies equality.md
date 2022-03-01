<br />
<br />

Date Created: 28/01/2022 15:34:05 %%auto_aliasing%%
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a binary relation and fix subsets $A,B\subseteq\dom R$. Then_
$$\begin{equation}
    \im_R\l(A\r)\comp\im_R\l(B\r)\subseteq\im_R\l(A\comp B\r).
\end{equation}$$
_Equality holds if for all $y\in\ran R$, there exists a unique $x$ such that $xRy$. If $R$ is a function, this is equivalent to saying that $f$ is injective._

```

_Proof_. Take $y\in\im_R\l(A\r)\comp\im_R\l(B\r)$. The result follows from the following chain of implications:
$$\begin{equation}
    \begin{alignedat}{2}
        y\in\im_R\l(A\r)\comp\im_R\l(B\r)&\Leftrightarrow y\in\im_R\l(A\r)\land\lnot y\in\im_R\l(B\r)&&\textrm{Definition of relative complement}\\
        &\Leftrightarrow y\in\ran\l(R\rest A\r)\land\lnot y\in\ran\l(R\rest B\r)&&\textrm{Definition of image}\\
        &\Leftrightarrow\ex x:\l\langle x,y\r\rangle\in R\rest A\land\lnot\ex t:\l\langle t,y\r\rangle\in R\rest B&&\textrm{Definition of range}\\
        &\Leftrightarrow\ex x\in A:\l\langle x,y\r\rangle\in R\land\lnot\ex t\in B:\l\langle t,y\r\rangle\in R\ \ \ \ \ \ \ \ &&\textrm{Definition of restriction}\\
        &\Leftrightarrow\ex x\in A:\l\langle x,y\r\rangle\in R\land\fa t\in B:\l\langle t,y\r\rangle\not\in R&&\textrm{Negation of quantifier}\\
        &\Rightarrow\ex x\in A:\l\langle x,y\r\rangle\in R\land x\not\in B&&\textrm{Universal instantiation; contradiction}\\
        &\Leftrightarrow\ex x\in A\comp B:\l\langle x,y\r\rangle\in R&&\textrm{Definition of relative complement}\\
        &\Leftrightarrow y\in\ran\l[R\rest\l(A\comp B\r)\r]\ \ \ \ \ \ \ \ &&\textrm{Definition of range}\\
        &\Leftrightarrow y\in\im_R\l(A\comp B\r).&&\textrm{Definition of image}
    \end{alignedat}   
\end{equation}$$
Assume now that $R$ satisfies the additional requirement. We claim that
$$\begin{equation}
    \ex x\in A\comp B:\l\langle x,y\r\rangle\in R\ \ \ \ \Rightarrow\ \ \ \ \fa t\in B:\l\langle t,y\r\rangle\not\in R.
\end{equation}$$
Suppose, for sake of contradiction, that $\ex t\in B:\l\langle t,y\r\rangle\in R$. Since $y\in\ran R$, we see, by hypothesis, that $x=t$. However, we have that $x\not\in B$ which is a contradiction. This justifies why equivalence holds.<span style="float:right;">$\blacksquare$</span>
