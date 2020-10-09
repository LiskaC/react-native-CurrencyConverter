import React from "react";

export const RowItem = () => {
  return (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>Thing 1</Text>
      <Entypo name="chevron-right" size={20} color={colors.blue} />
    </TouchableOpacity>
  );
};
