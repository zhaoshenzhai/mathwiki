<div class="topSpace"></div>

Date Created: 20/12/2022 21:45:27
Tags: #Type/MOC #Later/Ring_Theory

Context: [Zermelo Fraenkel Set Theory](obsidian://open?file=TODO)
Excursions: _Not Applicable_
Abstractions: [Category Theory](obsidian://open?file=TODO)

$\huge\rm\bf{R}\normalsize\rm\bf{ING THEORY}$ is the study of the [category of rings](obsidian://open?file=TODO); that is, the study of [rings](Ring.md) and [homomorphisms](Ring%20Homomorphism.md) between them.

---

**Constructions.** As with most categories, $\catring$ has [subobjects](Subring.md), [products](obsidian://open?file=TODO), [direct sums](obsidian://open?file=TODO), and [quotients](Quotient%20Ring.md). Unique to Ring Theory is the concept of an [ideal](Ideal.md) $I$ in $R$, defined as subrngs that are stable under multiplication. These are precisely the subrngs that furnishes a compatible ring structure on its quotient.

Similarly, as with most categories, we can define the [kernel](Kernel%20(Ring%20Theory).md) and the image of a [homomorphism](Ring%20Homomorphism.md) $\phi:R\to S$. Furthermore, $\ker\phi$ is an ideal in $R$, so $\phi$ [decomposes](obsidian://open?file=TODO) into
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2023-01-03_225322/image.svg", width=300></center>

which, in particular, implies the [First Isomorphism Theorem](obsidian://open?file=TODO).<span style="float:right;">$\blacklozenge$</span>

---

**Characterizations.** As with most categories, rings are identified up to [isomorphism](Ring%20Isomorphism.md).<span style="float:right;">$\blacklozenge$</span>

---

**Computations.** Computations are easier in special classes of rings, all of which are modelled around the arithmetic structure of $\Z$ and [polynomial rings](Polynomial%20Ring.md) $K[x]$:
* In a [commutative ring](Commutative%20Ring.md), one can define [principal ideals](Principal%20Ideal.md), ideals $\textrm{`}$generated$\textrm{'}$ as multiples of some element. Furthermore, the quotient [$R/I$ is a field $\Leftrightarrow$ $I$ is maximal](Ideal%20is%20maximal%20iff%20quotient%20is%20a%20field.md) and [$R/I$ is an integral domain $\Leftrightarrow$ $I$ is prime](Ideal%20is%20prime%20iff%20quotient%20is%20an%20integral%20domain.md). Thus, in a commutative ring, [$\textrm{`}$maximal $\Rightarrow$ prime$\textrm{'}$](Maximal%20implies%20prime.md).
* In an [integral domain](Integral%20Domain.md), its [characteristic](Characteristic.md) is either prime or $0$, and the [cancellation law](Integral%20domain%20iff%20cancellable.md) holds.
* In a [principal ideal domain](Principal%20Ideal%20Domain%20(PID).md), one can, via [Bézout$\textrm{'}$s Identity](Bezout's%20Identity.md), define the [greatest common divisor](Greatest%20Common%20Divisor%20(GCD).md) for any two ring elements.
* In a [Euclidean Domain](Euclidean%20Domain%20(EUD).md), the greatest common divisor can be computed via the [Euclidean Algorithm](Euclidean%20Algorithm.md).<span style="float:right;">$\blacklozenge$</span>
