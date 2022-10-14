module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
    },
    { timestamps: true }
  );
  //when id is also required.
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};

//normal
// module.exports = mongoose => {
//   const Tutorial = mongoose.model(
//     "tutorial",
//     mongoose.Schema(
//       {
//         title: String,
//         description: String,
//         published: Boolean
//       },
//       { timestamps: true }
//     )
//   );

//   return Tutorial;
// };
