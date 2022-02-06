<br />
<br />

Date Created: 27/01/2022 11:56:26
Tags: #Proposition #Closed 

Proved by: [[Left inverse iff injection]], [[Right inverse iff surjection (Choice)]], [[Composition of relations is associative]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

_Let $f:X\to Y$. Then $f$ is a bijection iff it is invertible._

--- admonition

_Proof_. ($\Rightarrow$): Since $f$ is a bijection, it is both an injection and a surjection, so there exist left and right inverses $g,h:Y\to X$ of $f$, respectively. The following computation shows that they coincide:
$$\begin{equation}
    \begin{alignedat}{2}
        g&=g\circ\id_Y&&\textrm{Composition with identity function is the function itself}\\
        &=g\circ\l(f\circ h\r)&&h\textrm{ is a right inverse of }f\\
        &=\l(g\circ f\r)\circ h\ \ \ \ \ \ \ \ &&\textrm{Composition is associative}\\
        &=\id_X\circ h&&g\textrm{ is a left inverse of }f\\
        &=h.&&\textrm{Composition with identity function is the function itself}
    \end{alignedat}
\end{equation}$$
($\Leftarrow$): Since $f$ is invertible, $f$ has both a left and right inverse so $f$ is both injective and surjective. It follows, by definition, that $f$ is bijective.<span style="float:right;">$\blacksquare$</span>
