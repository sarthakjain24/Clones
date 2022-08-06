//
//  ExploreView.swift
//  TwitterClone
//
//  Created by SARTHAK JAIN on 7/22/22.
// Added the functionality to have an explore page to explore other accounts

import SwiftUI

struct ExploreView: View {
    var body: some View {
        NavigationView{
            VStack{
                ScrollView{
                    LazyVStack{
                        ForEach(0...25, id:\.self){_ in
                            NavigationLink{
                                ProfileView()
                            } label :{
                                UserRowView()
                            }
                        }
                    }
                }
            }.navigationTitle("Explore")
                .navigationBarTitleDisplayMode(.inline)
        }
    }
}

struct ExploreView_Previews: PreviewProvider {
    static var previews: some View {
        ExploreView()
    }
}
