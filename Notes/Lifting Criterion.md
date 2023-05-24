<div class="topSpace"></div>

Date Created: 22/05/2023 23:14:21
Tags: #Type/Theorem #Topic/Topology

Proved by: [[Unique Lifting Property]], [[Basic properties of path-connectedness]], [[Covering Homotopy Theorem]], [[Basic properties of covering maps]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Lifting Criterion).

_Let $f:\tpl{Y,y_0}\to\tpl{X,x_0}$ be a continuous map between pointed topological spaces and let $p:(\widetilde{X},\widetilde{x}_0)\to\tpl{X,x_0}$ be a covering map. If $Y$ is connected and locally path-connected, then there exists a unique lift $\widetilde{f}:\tpl{Y,y_0}\to(\widetilde{X},\widetilde{x}_0)$ of $f$ iff_ $f_\ast\!\l(\pi_1\l(Y,y_0\r)\r)\subseteq p_\ast\big(\pi_1(\widetilde{X},\widetilde{x}_0)\big)$_._
![[Images/2023-05-22_233431/image.svg|150]]

```

**Remark.** In particular, if $Y$ is simply-connected, then $\pi_1\l(Y,y_0\r)=0$ and $f_\ast\!\l(\pi_1\l(Y,y_0\r)\r)=0\subseteq p_\ast\big(\pi_1(\widetilde{X},\widetilde{x}_0)\big)$ obviously holds. Thus every map $f:\tpl{Y,y_0}\to\tpl{X,x_0}$ has a unique lift $\widetilde{f}:\tpl{Y,y_0}\to(\widetilde{X},\widetilde{x}_0)$ of $f$.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. If such a lift exists, then it is unique and $p_\ast\circ\widetilde{f}_\ast=(p\circ\widetilde{f})_\ast=f_\ast$, so $f_\ast\!\l(\pi_1\l(Y,y_0\r)\r)=p_\ast\big(\widetilde{f}_\ast\!\big(\pi_1\l(Y,y_0\r)\big)\big)\subseteq p_\ast\big(\pi_1(\widetilde{X},\widetilde{x}_0)\big)$. For the converse, note that connected locally path-connected spaces are path-connected. Let $y\in Y$ and let $\gamma$ be a path from $y_0$ to $y$, so $f\circ\gamma$ is a path starting at $x_0$ which has a unique lift $\widetilde{f\circ\gamma}$ starting at $\widetilde{x}_0$. Define $\widetilde{f}\l(y\r)\coloneqq\widetilde{f\circ\gamma}\l(1\r)$. Assuming $\widetilde{f}$ is well-defined and continuous, we have that $(p\circ\widetilde{f})\l(y\r)=p\l(\widetilde{f\circ\gamma}\l(1\r)\r)=\l(f\circ\gamma\r)\l(1\r)=f\l(y\r)$, so $\widetilde{f}$ lifts $f$. We now show that $\widetilde{f}\l(y\r)$ is well-defined for all $y\in Y$ and that $\widetilde{f}$ is continuous.
* To show that $\widetilde{f}\l(y\r)$ is well-defined, let $\delta$ be another path from $y_0$ to $y$. Then $\gamma\ast\delta^-$ is a loop at $y_0$, so $\sigma\coloneqq f\circ\l(\gamma\ast\delta^-\r)$ is a loop at $x_0$ whose homotopy class is in $f_\ast\!\l(\pi_1\l(Y,y_0\r)\r)\subseteq p_\ast\big(\pi_1(\widetilde{X},\widetilde{x}_0)\big)$. Thus $\sigma$ is homotopic to a loop at $x_0$ whose lift is a loop at $\widetilde{x}_0$, so $\widetilde{\sigma}$ is homotopic to a loop $\widetilde{\eta}$ at $\widetilde{x}_0$. Projecting, we obtain
$$\begin{equation}
    \l(f\circ\gamma\r)\ast\l(f\circ\delta^-\r)=f\circ\l(\gamma\ast\delta^-\r)\htopeq p\circ\widetilde{\eta}.
\end{equation}$$
Note that $p\circ\widetilde{\eta}$ is a loop at $x_0$, so we have $f\circ\gamma\htopeq\l(p\circ\widetilde{\eta}\r)\ast\l(f\circ\delta\r)=p\circ\l(\widetilde{\eta}\ast\widetilde{f\circ\delta}\r)$ which, by uniqueness of liftings, lifts to a homotopy $\widetilde{f\circ\gamma}\htopeq\widetilde{\eta}\ast\widetilde{f\circ\delta}$. Thus the liftings $\widetilde{f\circ\gamma}$ and $\widetilde{f\circ\delta}$ coincide at $1$, as desired.
![[Images/2023-05-23_164130/image.svg|300]]
* To show that $\widetilde{f}$ is continuous, let $y\in Y$, $\widetilde{x}\coloneqq\widetilde{f}\l(y\r)$, $x\coloneqq f\l(y\r)$, and let $\widetilde{U}_0$ be a neighborhood of $\widetilde{x}$. Let $U$ be an evenly-covered neighborhood of $x$ and let $\widetilde{U}_x$ be the sheet above $U$ containing $\widetilde{x}$. Set $\widetilde{U}\coloneqq\widetilde{U}_0\cap\widetilde{U}_x$ so that $\l.p\r|_{\widetilde{U}}:\widetilde{U}\to p\,(\widetilde{U})$ is a homeomorphism. Since $p\,(\widetilde{U})$ is open and $f$ is continuous, the set $f^{-1}\big(p\,(\widetilde{U})\big)$ is open and contains a path-connected neighborhood $V$ of $y$; we claim that $\widetilde{f}\l(V\r)\subseteq\widetilde{U}$. To this end, take $v\in V$ and let $\omega$ be a path from $y$ to $v$ whose image is in $V$. Then $f\circ\omega$ is a path in $f\l(V\r)\subseteq p\,(\widetilde{U})$ starting at $x$, which lifts to a path $\widetilde{f\circ\omega}$ in $\l.p\r|_{\widetilde{U}}^{-1}\big(p\,(\widetilde{U})\big)=\widetilde{U}$ starting at $\widetilde{x}$. For any path $\gamma$ from $y_0$ to $y$, note that the initial and end points of the lifts $\widetilde{f\circ\omega}$ and $\widetilde{f\circ\gamma}$ coincide, so $\widetilde{f\circ\gamma}\ast\widetilde{f\circ\omega}$ is defined. Its projection is $f\circ\l(\gamma\ast\omega\r)$, where $\gamma\ast\omega$ is a path from $y_0$ to $v$. Thus $\widetilde{f}\l(v\r)$ is, by definition, the endpoint of the lift of $f\circ\l(\gamma\ast\omega\r)$. Hence $\widetilde{f}\l(v\r)=\widetilde{f\circ\omega}\l(1\r)\in\widetilde{U}$, as desired.<span style="float:right;">$\blacksquare$</span>
