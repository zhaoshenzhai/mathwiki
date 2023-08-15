---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/02/2022 13:19:31
Tags: #Type/Proposition #Topic/Category_Theory/Later

Proved by: [[Invertible iff bijective#^surjection-iff-right-invertible]], [[Right-invertible implies epimorphism]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Consider the category $\catset$ and let $f:X\to Y$ be a function. Then $f$ is a surjection iff $f$ is an epimorphism.

```

<i>Proof.</i> ($\Rightarrow$). The forward direction is proven since, being a surjection, $f$ has a right-inverse (this depends on the Axiom of Choice).

($\Leftarrow$). Let $Z$ be a pair set; that is, $Z\coloneqq\l\{z_1,z_2\r\}$ for any sets $z_1$ and $z_2$. Define the functions
$$\begin{equation}
    \alpha_1,\alpha_2:Y\to Z\ \ \ \ \textrm{mapping}\ \ \ \ \alpha_1\l(y\r)\coloneqq z_1\ \ \ \ \textrm{and}\ \ \ \ \alpha_2\l(y\r)\coloneqq
        \begin{dcases}
            z_1 & \textrm{if }y\in\im f\\
            z_2 & \textrm{else}
        \end{dcases}
\end{equation}$$
for all $y\in Y$. Take $x\in X$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\alpha_1\circ f\r)\l(x\r)&=\alpha_1\l(f\l(x\r)\r)&&\textrm{Composition of functions}\\
        &=z_1&&f\l(x\r)\in Y\\
        &=\alpha_2\l(f\l(x\r)\r)&&f\l(x\r)\in\im f\\
        &=\l(\alpha_2\circ f\r)\l(x\r),\ \ \ \ \ \ \ \ &&\textrm{Composition of functions}
    \end{alignedat}
\end{equation}$$
so, since $f$ is an epimorphism, we see that $\alpha_1=\alpha_2$. By construction, this requires $y\in\im f$ for all $y\in Y$ and hence $f$ is surjective.<span style="float:right;">$\blacksquare$</span>
