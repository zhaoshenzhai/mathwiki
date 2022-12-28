---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 01/12/2022 14:15:44
Tags: #Theorem #Topics/Analysis

Proved by: [[Functional Limit Theorems in R]], [[Differentiable implies continuous]], [[Cluster point iff exist converging sequence]], [[Composition of continuous functions are continuous]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Differentiation Theorems in $\R$).

_Let $\Omega_1,\Omega_2\subseteq\R$ be such that $\Omega\coloneqq\Omega_1\cap\Omega_2\neq\em$, and fix a cluster point $c\in\Omega$. If $f:\Omega_1\to\R$ and $g:\Omega_2\to\R$ are differentiable at $c$, then the following properties hold:_
* _(Linearity): For all $\alpha\in\R$, $\alpha f+g$ is differentiable at $c$ and $\l(\alpha f+g\r)'\l(c\r)=\alpha f'\l(c\r)+g'\l(c\r)$._
* _(Product Rule): $f\cdot g$ is differentiable at $c$ and $\l(f\cdot g\r)'\l(c\r)=f'\l(c\r)g\l(c\r)+f\l(c\r)g'\l(c\r)$._
* _(Quotient Rule): If $g\l(c\r)\neq0$, then $c$ is a cluster point of $\Omega'\coloneqq\l\{x\in\Omega\mid g\l(x\r)\neq0\r\}$, $f/g$ is differentiable at $c$, and $\l(f/g\r)'\l(c\r)=\frac{f'\l(c\r)g\l(c\r)-f\l(c\r)g'\l(c\r)}{g\l(c\r)^2}$._
* _(Chain Rule): If $\im f\subseteq\Omega_2$ and $g$ is differentiable at $f\l(c\r)$, then $g\circ f$ is differentiable at $c$ and $\l(g\circ f\r)'\l(c\r)=g'\l(f\l(c\r)\r)f'\l(c\r)$._

```

_Proof_.
* (Linearity): Observe that
$$\begin{equation}
    \begin{aligned}
        \lim\limits_{x\to c}\frac{\l(\alpha f+g\r)\l(x\r)-\l(\alpha f+g\r)\l(c\r)}{x-c}&=\lim\limits_{x\to c}\frac{\l[\alpha f\l(x\r)+g\l(x\r)\r]-\l[\alpha f\l(c\r)+g\l(c\r)\r]}{x-c} && \textrm{Definition of $\alpha f+g$} \\
        &=\lim\limits_{x\to c}\frac{\alpha\l[f\l(x\r)-f\l(c\r)\r]+\l[g\l(x\r)-g\l(c\r)\r]}{x-c} && \textrm{Regroup} \\
        &=\alpha\l(\lim\limits_{x\to c}\frac{f\l(x\r)-f\l(c\r)}{x-c}\r)+\l(\lim\limits_{x\to c}\frac{g\l(x\r)-g\l(c\r)}{x-c}\r) && \textrm{Linearity of limit} \\
        &=\alpha f'\l(c\r)+g'\l(c\r). && \textrm{Definitions of $f'\l(c\r)$ and $g'\l(c\r)$}
    \end{aligned}
\end{equation}$$

* (Product Rule): Observe that
$$\begin{equation}
    \begin{aligned}
        \lim\limits_{x\to c}\frac{\l(f\cdot g\r)\l(x\r)-\l(f\cdot g\r)\l(c\r)}{x-c}&=\lim\limits_{x\to c}\frac{f\l(x\r)g\l(x\r)-f\l(c\r)g\l(c\r)}{x-c} && \textrm{Definition of $f\cdot g$} \\
        &=\lim\limits_{x\to c}\frac{f\l(x\r)g\l(x\r)-f\l(c\r)g\l(x\r)+f\l(c\r)g\l(x\r)-f\l(c\r)\l(gc\r)}{x-c} && \textrm{Add/subtract $f\l(c\r)g\l(x\r)$} \\
        &=\l(\lim\limits_{x\to c}\frac{g\l(x\r)\l[f\l(x\r)-f\l(c\r)\r]}{x-c}\r)+\l(\lim\limits_{x\to c}\frac{f\l(c\r)\l[g\l(x\r)-g\l(c\r)\r]}{x-c}\r) && \textrm{Linearity of limit} \\
        &=g\l(c\r)\l(\lim\limits_{x\to c}\frac{f\l(x\r)-f\l(c\r)}{x-c}\r)+f\l(c\r)\l(\lim\limits_{x\to c}\frac{g\l(x\r)-g\l(c\r)}{x-c}\r) && \textrm{Continuity of $g$} \\
        &=f'\l(c\r)g\l(c\r)+f\l(c\r)g'\l(c\r). && \textrm{Definitions of $f'\l(c\r)$ and $g'\l(c\r)$}
    \end{aligned}
\end{equation}$$
* (Quotient Rule): We first show that $c$ is a cluster point of $\Omega'$. Indeed, Since $g$ is continuous at $c$, take $\epsilon\coloneqq\l|g\l(c\r)\r|>0$ and observe that
$$\begin{equation}
    \ex\delta>0,\fa x\in\Omega:0<\l|x-c\r|<\delta\Rightarrow\l|g\l(x\r)-g\l(c\r)\r|<\l|g\l(c\r)\r|.
\end{equation}$$
Thus $g\l(x\r)\neq0$ for all $x\in B_\delta\!\l(c\r)\cap\Omega\comp\l\{c\r\}$, so it suffices to find some sequence $\tpl{x_n}$ in $B_\delta\!\l(c\r)\cap\Omega\comp\l\{c\r\}$ such that $x_n\to c$. But $c$ is a cluster point of $\Omega$, so there exists a sequence $\tpl{x'_n}$ in $\Omega\comp\l\{c\r\}$ such that $x_n\to c$. Taking $\tpl{x_n}$ to be the $N$-tail of $\tpl{x'_n}$ such that $\l|x'_n-c\r|<\delta$ for all $n\geq N\in\N$ gives the desired sequence. Now, compute
$$\begin{align}
    \lim\limits_{x\to p}\frac{\l(\frac{f}{g}\r)\l(x\r)-\l(\frac{f}{g}\r)\l(c\r)}{x-c}&=\lim\limits_{x\to p}\frac{\frac{f\l(x\r)}{g\l(x\r)}-\frac{f\l(c\r)}{g\l(c\r)}}{x-c} && \textrm{Definition of $\frac{f}{g}$} \\
    &=\lim\limits_{x\to p}\frac{f\l(x\r)g\l(c\r)-f\l(c\r)g\l(x\r)}{g\l(c\r)g\l(x\r)\l(x-c\r)} && \textrm{Simplification} \\
    &=\lim\limits_{x\to p}\frac{f\l(x\r)g\l(x\r)-f\l(c\r)g\l(x\r)-f\l(x\r)g\l(x\r)+f\l(x\r)g\l(c\r)}{g\l(c\r)g\l(x\r)\l(x-c\r)} && \textrm{Add/subtract }f\l(x\r)g\l(x\r) \\
    &=\lim\limits_{x\to p}\frac{1}{g\l(c\r)g\l(x\r)}\l[g\l(x\r)\l(\frac{f\l(x\r)-f\l(c\r)}{x-c}\r)-f\l(x\r)\l(\frac{g\l(x\r)-g\l(c\r)}{x-c}\r)\r] && \textrm{Factor} \\
    &=\frac{1}{g\l(c\r)^2}\lim\limits_{x\to p}\l[g\l(x\r)\l(\frac{f\l(x\r)-f\l(c\r)}{x-c}\r)-f\l(x\r)\l(\frac{g\l(x\r)-g\l(c\r)}{x-c}\r)\r] && \textrm{Continuity of $g$} \\
    &=\frac{1}{g\l(c\r)^2}\l[g\l(c\r)\l(\lim\limits_{x\to p}\frac{f\l(x\r)-f\l(c\r)}{x-c}\r)-f\l(c\r)\l(\lim\limits_{x\to p}\frac{g\l(x\r)-g\l(c\r)}{x-c}\r)\r] && \textrm{Continuity of $f$ and $g$} \\
    &=\frac{f'\l(c\r)g\l(c\r)-f\l(c\r)g'\l(c\r)}{g\l(c\r)^2}. && \textrm{Definitions of $f'\l(c\r)$ and $g'\l(c\r)$}
\end{align}$$
* (Chain Rule): Since $f$ is differentiable at $c$, Carath$\acute{\textrm{e}}$odory's Criterion furnishes a function $\phi:\Omega_1\to\R$, continuous at $c$, such that $\phi\l(c\r)=f'\l(c\r)$ and
$$\begin{equation}
    f\l(x\r)-f\l(c\r)=\phi\l(x\r)\l(x-c\r)
\end{equation}$$
for all $x\in\Omega_1$. Similarly, there exists a function $\psi:\Omega_2\to\R$, continuous at $f\l(c\r)$, such that $\psi\l(f\l(c\r)\r)=g'\l(f\l(c\r)\r)$ and
$$\begin{equation}
    g\l(y\r)-g\l(f\l(c\r)\r)=\psi\l(y\r)\l(y-f\l(c\r)\r)
\end{equation}$$
for all $y\in\Omega_2$. Then, for all $x\in\Omega_1$, let $y\coloneqq f\l(x\r)\in\Omega_2$ to obtain
$$\begin{equation}
    g\l(f\l(x\r)\r)-g\l(f\l(c\r)\r)=\psi\l(f\l(x\r)\r)\l[f\l(x\r)-f\l(c\r)\r]=\psi\l(f\l(x\r)\r)\phi\l(x\r)\l(x-c\r).
\end{equation}$$
Since $\phi$ is continuous at $c$ and $\psi$ is continuous at $f\l(c\r)$, we see that the function $\l(\psi\circ f\r)\cdot\phi$ is continuous at $c$ too. Thus, by Carath$\acute{\textrm{e}}$odory's Criterion, $g\circ f$ is differentiable at $c$ with
$$\begin{equation}
    \l(g\circ f\r)'\l(c\r)=\l[\l(\psi\circ f\r)\cdot\phi\r]\l(c\r)=\psi\l(f\l(c\r)\r)\phi\l(c\r)=g'\l(f\l(c\r)\r)f'\l(c\r).\qedin
\end{equation}$$
