<br />
<br />

Date Created: 28/01/2022 13:54:27
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $R$ be a binary relation and fix a non-empty subset $\mc{A}\subseteq\mc{P}\l(\dom R\r)$, that is, fix a non-empty collection of subsets of $\dom R$. Then
$$\begin{equation}
    \im_R\l(\bigcap\mc{A}\r)\subseteq\bigcap\l\{\im_R\l(A\r)\mid A\in\mc{A}\r\}.
\end{equation}$$
Equality holds if for all $y\in\ran R$, there exists a unique $x$ such that $xRy$; if $R=f$ is a function, then equality holds iff $f$ is injective.

--- admonition

_Proof_. Take $y\in\im_R\l(\bigcap\mc{A}\r)$. The result follows from the following chain of implications:
$$\begin{alignat}{2}
    y\in\im_R\l(\bigcap\mc{A}\r)&\Leftrightarrow y\in\ran\l(R\rest\bigcap\mc{A}\r)&&\textrm{Definition of image}\\
    &\Leftrightarrow\ex x:\l\langle x,y\r\rangle\in R\rest\l(\bigcap\mc{A}\r)&&\textrm{Definition of range}\\
    &\Leftrightarrow\ex x:\l\langle x,y\r\rangle\in R\land x\in\bigcap\mc{A}&&\textrm{Definition of restriction}\\
    &\Leftrightarrow\ex x:\l\langle x,y\r\rangle\in R\land\l(\fa A\in\mc{A}:x\in A\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of intersection}\\
    &\Leftrightarrow\ex x,\fa A\in\mc{A}:\l\langle x,y\r\rangle\in R\land x\in A&&A\textrm{ not free in }\l\langle x,y\r\rangle\in R\\
    &\Rightarrow\fa A\in\mc{A},\ex x:\l\langle x,y\r\rangle\in R\land x\in A&&\textrm{Quantifier shift}\\
    &\Leftrightarrow\fa A\in\mc{A},\ex x:\l\langle x,y\r\rangle\in R\rest A&&\textrm{Definition of restriction}\\
    &\Leftrightarrow\fa A\in\mc{A}:y\in\ran\l(R\rest A\r)&&\textrm{Definition of range}\\
    &\Leftrightarrow\fa A\in\mc{A}:y\in\im_R\l(A\r)&&\textrm{Definition of image}\\
    &\Leftrightarrow y\in\bigcap\l\{\im_R\l(A\r)\mid A\in\mc{A}\r\}.&&\textrm{Definition of intersection}
\end{alignat}$$
Assume now that $R$ satisfies the additional requirement. We claim that
$$\begin{equation}
    \fa A\in\mc{A},\ex x:\l\langle x,y\r\rangle\in R\land x\in A\ \ \ \ \Rightarrow\ \ \ \ \ex x,\fa A\in\mc{A}:\l\langle x,y\r\rangle\in R\land x\in A,
\end{equation}$$
so equivalence holds. Take $A\in\mc{A}$, so there exists some $x$, _that may depend on $A$_, such that $\l\langle x,y\r\rangle\in R$ and $x\in A$. It suffices to prove that the choice of $x$ does _not_ depend on $A$. Simply observe that $y\in\ran R$, so such an $x$ must, by hypothesis, be unique. It follows that if $\l\langle x,y\r\rangle\in R$ and $x\in A$ for some specific $A\in\mc{A}$, then $x\in A'$ for some other $A'\in\mc{A}$ too. Thus $x\in A$ for all $A\in\mc{A}$. This justifies why the quantifiers may be swapped, and hence why equivalence holds.

Assume now that $R=f$ is a function; we have already proved that if $f$ is injective, then equality holds. For the converse, take $x,y\in\dom f$ with $f\l(x\r)=f\l(y\r)$. Let $\mc{A}=\l\{\l\{x\r\},\l\{y\r\}\r\}$, so we have
$$\begin{equation}
    \im_f\l(\l\{x\r\}\cap\l\{y\r\}\r)=\im_f\l(\l\{x\r\}\r)\cap\im_f\l(\l\{y\r\}\r).
\end{equation}$$
If $x\neq y$, then $\l\{x\r\}\neq\l\{y\r\}$ and hence $\l\{x\r\}\cap\l\{y\r\}=\em$. Observe that $\im_f\l(\em\r)=\ran\l(f\rest\em\r)=\em$. However, we have
$$\begin{equation}
    \im_f\l(\l\{x\r\}\r)=\ran\l(f\rest\l\{x\r\}\r)=\l\{f\l(x\r)\r\}=\l\{f\l(y\r)\r\}=\ran\l(f\rest\l\{y\r\}\r)=\im_f\l(\l\{y\r\}\r)
\end{equation}$$
and thus $\im_f\l(\l\{x\r\}\r)\cap\im_f\l(\l\{y\r\}\r)\neq\em$, a contradiction.<span style="float:right;">$\blacksquare$</span>
