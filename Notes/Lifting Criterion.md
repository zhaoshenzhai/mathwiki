<div class="topSpace"></div>

Date Created: 22/05/2023 23:14:21
Tags: #Type/Theorem #Topic/Topology

Proved by: [[Unique Lifting Property]], [[Homotopy Lifting Theorem]], [[Basic properties of covering spaces]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Lifting Criterion).

Let $f:\tpl{Y,y_0}\to\tpl{X,x_0}$ be a continuous map between pointed topological spaces and let $p:(\widetilde{X},\widetilde{x}_0)\to\tpl{X,x_0}$ be a covering map. If $Y$ is connected and locally path-connected, then there exists a lift $\widetilde{f}:\tpl{Y,y_0}\to(\widetilde{X},\widetilde{x}_0)$ of $f$ iff $f_\ast\pi_1\!\l(Y,y_0\r)\subseteq p_\ast\pi_1(\widetilde{X},\widetilde{x}_0)$, in which case the lift is unique.
![[Images/2023-05-22_233431/image.svg|150]]

```

<b>Remark.</b> In particular, if $Y$ is simply-connected, then $\pi_1\l(Y,y_0\r)=0$ and $f_\ast\pi_1\!\l(Y,y_0\r)=0\subseteq p_\ast\pi_1(\widetilde{X},\widetilde{x}_0)$ obviously holds. Thus every map $f:\tpl{Y,y_0}\to\tpl{X,x_0}$ has a unique lift $\widetilde{f}:\tpl{Y,y_0}\to(\widetilde{X},\widetilde{x}_0)$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> If such a lift exists, then it is unique and $p_\ast\circ\widetilde{f}_\ast=(p\circ\widetilde{f})_\ast=f_\ast$, so $f_\ast\pi_1\!\l(Y,y_0\r)=p_\ast\widetilde{f}_\ast\pi_1\!\l(Y,y_0\r)\subseteq p_\ast\pi_1(\widetilde{X},\widetilde{x}_0)$. For the converse, note that connected locally path-connected spaces are path-connected. Let $y\in Y$ and let $\gamma$ be a path from $y_0$ to $y$, so $f\circ\gamma$ is a path starting at $x_0$ which has a unique lift $\widetilde{f\circ\gamma}$ starting at $\widetilde{x}_0$. Define $\widetilde{f}\l(y\r)\coloneqq\widetilde{f\circ\gamma}\l(1\r)$. Assuming $\widetilde{f}$ is well-defined and continuous, we have that $(p\circ\widetilde{f})\l(y\r)=p\circ\widetilde{f\circ\gamma}\l(1\r)=\l(f\circ\gamma\r)\l(1\r)=f\l(y\r)$, so $\widetilde{f}$ lifts $f$. We now show that $\widetilde{f}\l(y\r)$ is well-defined for all $y\in Y$ and that $\widetilde{f}$ is continuous.
* (Well-definedness). Let $\delta$ be another path from $y_0$ to $y$. Then $\gamma\ast\delta^-$ is a loop at $y_0$, so $\sigma\coloneqq f\circ\l(\gamma\ast\delta^-\r)$ is a loop at $x_0$ whose homotopy class is in $f_\ast\pi_1\!\l(Y,y_0\r)\subseteq p_\ast\pi_1(\widetilde{X},\widetilde{x}_0)$. Thus $\sigma$ is homotopic to a loop at $x_0$ whose lift is a loop at $\widetilde{x}_0$, so $\widetilde{\sigma}$ is homotopic to a loop $\widetilde{\eta}$ at $\widetilde{x}_0$. Projecting, we obtain
$$\begin{equation}
    \l(f\circ\gamma\r)\ast\l(f\circ\delta^-\r)=f\circ\l(\gamma\ast\delta^-\r)\htopeq p\circ\widetilde{\eta}.
\end{equation}$$
Note that $p\circ\widetilde{\eta}$ is a loop at $x_0$, so we have $f\circ\gamma\htopeq\l(p\circ\widetilde{\eta}\r)\ast\l(f\circ\delta\r)=p\circ(\widetilde{\eta}\ast\widetilde{f\circ\delta})$ which, by uniqueness of liftings, lifts to a homotopy $\widetilde{f\circ\gamma}\htopeq\widetilde{\eta}\ast\widetilde{f\circ\delta}$. Thus the liftings $\widetilde{f\circ\gamma}$ and $\widetilde{f\circ\delta}$ coincide at $1$, as desired.
![[Images/2023-05-23_164130/image.svg|300]]
* (Continuity). Let $y\in Y$, $x\coloneqq f\l(y\r)$, $\widetilde{x}\coloneqq\widetilde{f}\l(y\r)$, and let $\widetilde{U}_0$ be a neighborhood of $\widetilde{x}$. For an evenly-covered neighborhood $U$ of $x$, let $\widetilde{U}_\widetilde{x}$ denote the sheet above $U$ containing $\widetilde{x}$. Set $\widetilde{U}\coloneqq \widetilde{U}_0\cap \widetilde{U}_\widetilde{x}$, so $p$ is a homeomorphism when restricted to $\widetilde{U}$. Thus $p\,(\widetilde{U})$ is open, so by continuity $f^{-1}(p\,(\widetilde{U}))$ is open too. By local path-connectedness of $Y$, this set contains a path-connected neighborhood $W$ of $y$. We claim that $\widetilde{f}\l(W\r)\subseteq \widetilde{U}$, so take $w\in W$ and let $\sigma$ be a path from $y$ to $w$ contained in $W$. Then $f\circ\sigma$ is a path in $f\l(W\r)\subseteq p\,(\widetilde{U})$ starting at $x$, which lifts to a path $\widetilde{f\circ\sigma}$ in $\widetilde{U}$ starting at $\widetilde{x}$. But since the end point of $\widetilde{f\circ\gamma}$ constructed above is $\widetilde{x}=\widetilde{f}\l(y\r)$, the concatenation of $\widetilde{f\circ\gamma}\ast\widetilde{f\circ\sigma}$ is well-defined and is a path starting at $\widetilde{x}_0$. This path lifts $f\circ\l(\gamma\ast\sigma\r)$, and since $\gamma\ast\sigma$ is a path from $y_0$ to $w$, we see that $\widetilde{f}\l(w\r)$ is the end point of $\widetilde{f\circ\gamma}\ast\widetilde{f\circ\sigma}$. But this end point is $\widetilde{f}\l(y\r)=\widetilde{f\circ\gamma}\l(1\r)$, which lies in $\widetilde{U}$.<span style="float:right;">$\blacksquare$</span>
