<div class="topSpace"></div>

Date Created: 16/11/2022 17:44:54
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>


``` ad-Definition
title: Definition.

Let $X$ and $Y$ be topological spaces, fix a cluster point $p\in\Omega\subseteq X$, and let $L\in Y$. For a function $f:\Omega\to Y$, we say that <b>$f\to L$ as $x\to p$</b> or <b>$L$ is a limit of $f$</b> if for every neighborhood $V\subseteq Y$ of $L$, there exists a neighborhood $U\subseteq X$ of $p$ such that $f\l(U\cap\Omega\comp\l\{p\r\}\r)\subseteq V$.

```

<b>Remark.</b> If $X$ and $Y$ are metric spaces, then $f\to L$ as $x\to p$ iff for all sequences $\tpl{x_n}$ in $\Omega\comp\l\{p\r\}$ such that $x_n\to p$, we have $f\l(x_n\r)\to L$.
* ($\Rightarrow$). Take a sequence $\tpl{x_n}$ in $\Omega\comp\l\{p\r\}$ such that $x_n\to p$. Let $\epsilon>0$, so $\ex\delta>0:f\l(B_\delta\!\l(p\r)\cap\Omega\comp\l\{p\r\}\r)\subseteq B_\epsilon\!\l(L\r)$. But $x_n\to p$, so $\fa^\infty n\in\N:x_n\in B_\delta\!\l(p\r)$, and since $\tpl{x_n}$ is in $\Omega\comp\l\{p\r\}$, we see that $x_n\in B_\delta\!\l(p\r)\cap\Omega\comp\l\{p\r\}$ for all eventually $n\in\N$. Thus $f\l(x_n\r)\in B_\epsilon\!\l(L\r)$ eventually, so $f\l(x_n\r)\to L$.

* ($\Leftarrow$). We prove the contrapositive, so suppose that $\lim\limits_{x\to p}f\l(x\r)\neq L$. Thus $\ex\epsilon>0,\fa\delta>0,\ex x_\delta\!\in B_\delta\!\l(p\r)\cap\Omega\comp\l\{p\r\}:f\l(x_\delta\r)\not\in B_\epsilon\!\l(L\r)$, so, taking $\delta\coloneqq1/n$ for all $n\in\N^+$, we obtain a sequence $\tpl{x_n}$ in $\Omega\comp\l\{p\r\}$ such that $d\l(x_n,p\r)<1/n$ despite $f\l(x_n\r)\not\in B_\epsilon\!\l(L\r)$. Thus $x_n\to p$ despite $f\l(x_n\r)\not\to L$.<span style="float:right;">$\blacksquare$</span>
