## Les extensions

**`_<NOM_DU_COMPOSANT>_extension.scss`**

Il est possible d'étendre les fonctionnalités du composant en ajoutant simplement un point d'entrée avec une déclaration `$briks-components-generic` à la typologie identique mais avec des propriétés par défaut et des modifieurs qui surchargent ou ajoutent des propriétés CSS.

L'exemple suivant reprend la logique de l'extension de composant en y ajoutant des gaps flexbox.

```scss
/*
    C-FLEX EXTENSION
    Extension du composant générique c-flex
    https://github.com/ita-design-system/c-flex.scss
    Ce fichier doit servir à étendre ou surcharger les fonctionnalités
    du composant c-flex selon les besoins du projet
*/
$briks-components-generic: (
    // Nom du composant, obligatoirement flex
    flex: ( 
        // Extension activée true ou false
        enabled: true, 
        // Responsive activée true ou false pour l'extension
        responsive: true, 
        // Valeurs par défaut de l'extension
        defaults: (),
        // Liste des modifieurs contenant chacun une liste de propriétés qui 
        // soit surchargent les propriétés par défaut
        // soit ajoutent des propriétés
        // soit les deux
        modifiers: ( 
            // Gap
            // Surcharge de la variable CSS --ita-gap pour compatibilité avec c-dim
            gap-1: ( // c-flex m-gap-1
                --ita-gap: my-spacing(2)
            ),
            gap-2: ( // c-flex m-gap-2
                --ita-gap: my-spacing(4)
            ),
            gap-3: ( // c-flex m-gap-3
                --ita-gap: my-spacing(8)
            )
        )
    )
);
```