class Circle extends Shape {                    // The "extends" keyword is what we use to tell java that Circle inherits the functionality of Shape.

    static final double PI = Math.PI;   // constant
    double diameter;                    // This could be any number, representing the diameter of this circle.

    public double  calculateArea () {
        double radius = diameter / 2.0;
        return PI * radius * radius;
    }

}
